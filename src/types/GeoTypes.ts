export interface Location {
	country: string;
	region: string;
	city: string;
	lat: number;
	lng: number;
	postalCode: string;
	timezone: string;
	geonameId: number;
}

export interface A {
	asn: number;
	name: string;
	route: string;
	domain: string;
	type: string;
}

export interface IGeoAPI {
	ip: string;
	location: Location;
	domains?: string[];
	as: A;
	isp: string;
}