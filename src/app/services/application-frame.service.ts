import { Injectable } from '@angular/core';

declare var window: any;

@Injectable({ providedIn: 'root' })

export class ApplicationFrameService
{
	private applicationFrame = window.AppEnvironment;	

	public get webServerType():string
	{
		return this.applicationFrame.webServerType;
	}
	public get webAPIServer(): string
	{
		return this.applicationFrame.webAPIServer;
	}

	public get companyName(): string
	{
		return this.applicationFrame.companyName;
	}

	public get productName(): string
	{
		return this.applicationFrame.productName;
	}

	public get productVersion(): string
	{
		return this.applicationFrame.productVersion;
	}

	public get LogLevel(): Number
	{
		return this.applicationFrame.webFrontLogLevel;
	}
}
