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
  responseType: wozobject_pb.WozObjectReply
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

exports.WozObjectsClient = WozObjectsClient;

