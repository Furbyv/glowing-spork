// package: wozobject
// file: wozobject.proto

var wozobject_pb = require("./wozobject_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WozObjects = (function () {
  function WozObjects() {}
  WozObjects.serviceName = "wozobject.WozObjects";
  return WozObjects;
}());

WozObjects.GetWozObject = {
  methodName: "GetWozObject",
  service: WozObjects,
  requestStream: false,
  responseStream: false,
  requestType: wozobject_pb.WozObjectRequestById,
  responseType: wozobject_pb.WozObjectsReply
};

WozObjects.GetFullWozObject = {
  methodName: "GetFullWozObject",
  service: WozObjects,
  requestStream: false,
  responseStream: true,
  requestType: wozobject_pb.WozObjectRequestById,
  responseType: wozobject_pb.FullWozObjectReply
};

exports.WozObjects = WozObjects;

function WozObjectsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WozObjectsClient.prototype.getWozObject = function getWozObject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WozObjects.GetWozObject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WozObjectsClient.prototype.getFullWozObject = function getFullWozObject(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WozObjects.GetFullWozObject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.WozObjectsClient = WozObjectsClient;

