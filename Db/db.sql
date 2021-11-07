create table wozobjects(
	wozobjectnummer int8,
	StartDate date,
	EndDate date,
	CONSTRAINT PK_wozobjects PRIMARY KEY(wozobjectnummer)
);

create table gemeenten(
	gemeentecode numeric(4),
	gemeentenaam varchar(40),
	CONSTRAINT PK_gemeenten PRIMARY KEY(gemeentecode)
);

create table wozobjectproperties(
	id BIGSERIAL,
	wozobjectnummer int8,
	adresidentificatie varchar(16),
	nummeraanduiding  varchar(16),
	GemeenteCode numeric(4),
	NaamOpenbareRuimte varchar(80),
	Straatnaam varchar(24),
	Huisnummer numeric(5),
	Huisletter varchar(1),
	Huisnummertoevoeging varchar(4),
	Postcode varchar(6),
	Wijkcode varchar(4),
	Buurtcode varchar(4),
	WoonplaatsNaam  varchar(80),
	Locatieomschrijving varchar(40),
	Grondoppervlakte numeric(11),
	SoortObjectCode varchar(4),
	IndicatieLigging varchar(2),
	AanwezigheidLift bit,
	Gebruikscode numeric(2),
	CodeGebouwdOngebouwd varchar(1),
	MeegetaxeerdeOppervlakte numeric(11),
	OZBVrijstelling numeric(1),
	BijzondereWaarderingsCode numeric(3),
	MonumentAanduiding numeric(1),
	CodeOmzetBelasting varchar(1),
	Groepaanduiding varchar(8),
	AanduidingBouwstroom varchar(6),
	AanduidingOnderzoek varchar(1),
	StatusWozObject numeric(2),
	Waardegebied varchar(8),
	CodeOntbrekenNutsVoorzieningen varchar (3),
	FinancieringsVorm varchar(2),
	Stijlletter varchar(1),
	Omschrijving varchar(100),
	BeginDatumGeldigheid numeric(11),
	EindDatumGeldigheid numeric(11),
	TijdstipRegistratie numeric(11),
	StartDate date,
	EndDate date,
	CONSTRAINT PK_wozobjectproperties PRIMARY KEY(id),
	CONSTRAINT FK_wozobjectproperties_objects FOREIGN key(wozobjectnummer) references wozobjects(wozobjectnummer)  on delete CASCADE,
	CONSTRAINT FK_wozobjectproperties_gemeenten FOREIGN key(GemeenteCode) references gemeenten(GemeenteCode) on delete CASCADE
);

create table propertytypes(
	propertytype varchar(1),
	CONSTRAINT PK_propertytypes PRIMARY KEY(propertytype)
);

create table flexproperties( 
	propertycode varchar(6),
	omschrijving text,
	propertytype varchar(1),
	CONSTRAINT PK_flexproperties PRIMARY KEY(propertycode),
	CONSTRAINT FK_flexproperties_propertytypes FOREIGN key(propertytype) references propertytypes(propertytype)  on delete CASCADE
);

create table wozobjectflexproperties(
	id BIGSERIAL,
	wozobjectpropertiesid int8,
	propertycode varchar(6),
	numbervalue int8,
	datevalue date,
	textvalue varchar(256),
	CONSTRAINT PK_wozobjectflexproperties PRIMARY KEY(id),
	CONSTRAINT FK_wozobjectflexproperties_flexproperties FOREIGN key(propertycode) references flexproperties(propertycode)  on delete CASCADE,
	CONSTRAINT FK_wozobjectflexproperties_wozobjectproperties FOREIGN key(wozobjectpropertiesid) references wozobjectproperties(id)  on delete CASCADE
);

create table wozdeelobjects(
	id BIGSERIAL,
	wozobjectnummer int8,
	nummerwozdeelobject numeric(6) unique,
	StartDate date,
	EndDate date,
	CONSTRAINT PK_wozdeelobjects PRIMARY KEY(id),
	CONSTRAINT FK_wozdeelobjects_objects FOREIGN key(wozobjectnummer) references wozobjects(wozobjectnummer)  on delete CASCADE
);

create table wozdeelobjectproperties(
	id BIGSERIAL,
	wozdeelobjectid int8,
	CodeWOZDeelObject varchar(4),
	Bouwjaar numeric(4),
	Bouwlaag numeric(3),
	OntsluitingVerdieping varchar(3),
	AantalKamers numeric(2),
	BouwjaarKlasse varchar(9),
	RenovatieJaar numeric(4),
	RenovatiePercentage numeric(2),
	Kwaliteit varchar(1),
	Onderhoudstoestand varchar(1),
	Uitstraling varchar(1),
	Doelmatigheid varchar(1),
	Voorzieningen varchar(1),
	Inhoud numeric(11),
	CodeBrutoNettoInhoud varchar(1),
	Oppervlakte numeric(11),
	CodeNettoBrutoOppervlakte varchar(1),
	AantalStuks numeric(11),
	Lengte numeric(4,1),
	Breedte numeric(4,1),
	Hoogte numeric(4,1),
	FrontBreedte numeric(4,1),
	BagIdentificatie varchar(16),
	BapaaltGegevensTaxatieverslag bit,
	Archetype varchar(8),
	StatusDeelObject varchar(2),
	BepaaltAanduiding bit,
	CodeVrijstellingOZB varchar(1),
	Groepaanduiding varchar(8),
	CodeOmzetBelasting varchar(1),
	Aantekening varchar(50),
	BeginDatumGeldigheid numeric(11),
	EindDatumGeldigheid numeric(11),
	TijdstipRegistratie numeric(11),
	StartDate date,
	dtend date,
	CONSTRAINT PK_wozdeelobjectproperties PRIMARY KEY(id),
	CONSTRAINT FK_wozdeelobjectproperties_wozdeelobjects FOREIGN key(wozdeelobjectid) references wozdeelobjects(id)  on delete CASCADE
);

CREATE table images(
	id bigserial,
	ìmage bytea,
	wozobjectnummer int8,
	main bit,
	CONSTRAINT PK_images PRIMARY KEY(id),
	CONSTRAINT FK_images_objects FOREIGN key(wozobjectnummer) references wozobjects(wozobjectnummer)  on delete CASCADE
);