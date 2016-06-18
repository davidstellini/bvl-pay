import 'reflect-metadata';
import {Kernel, IKernel, IRequest} from "inversify";
import {BasicAuthDecorator} from "../Auth/BasicAuth";
import {ApiRequestDecorator, Parser} from "tsmvc";

import {apiAccountEntryDataRepository} from '../data/apiAccountEntryDataRepository';
import {apiAccountEntryDataRepositoryImpl} from '../data/apiAccountEntryDataRepositoryImpl';
import {apiAccountEntryService} from './apiAccountEntryService';
import {apiFeeDataRepository} from '../data/apiFeeDataRepository';
import {apiFeeDataRepositoryImpl} from '../data/apiFeeDataRepositoryImpl';
import {apiFeeService} from './apiFeeService';
import {apiAccountDataRepository} from '../data/apiAccountDataRepository';
import {apiAccountDataRepositoryImpl} from '../data/apiAccountDataRepositoryImpl';
import {apiAccountService} from './apiAccountService';
import {apiAccountPermissionDataRepository} from '../data/apiAccountPermissionDataRepository';
import {apiAccountPermissionDataRepositoryImpl} from '../data/apiAccountPermissionDataRepositoryImpl';
import {apiAccountPermissionService} from './apiAccountPermissionService';
import {apiAccountRuleDataRepository} from '../data/apiAccountRuleDataRepository';
import {apiAccountRuleDataRepositoryImpl} from '../data/apiAccountRuleDataRepositoryImpl';
import {apiAccountRuleService} from './apiAccountRuleService';


import {HateoasResponseParser} from '../ApiResponseParsers/HateoasResponseParser.ts'; //TODO: REMOVE!


var kernel : IKernel = null;

export class ServiceManager {
	public static apiAccountEntryService : apiAccountEntryService;
	public static apiFeeService : apiFeeService;
	public static apiAccountService : apiAccountService;
	public static apiAccountPermissionService : apiAccountPermissionService;
	public static apiAccountRuleService : apiAccountRuleService;


  static bindDependentDataLayers() {
  //Data Layer bindings
		kernel.bind<apiAccountEntryDataRepository>("apiAccountEntryDataRepository").to(apiAccountEntryDataRepositoryImpl);
		kernel.bind<apiFeeDataRepository>("apiFeeDataRepository").to(apiFeeDataRepositoryImpl);
		kernel.bind<apiAccountDataRepository>("apiAccountDataRepository").to(apiAccountDataRepositoryImpl);
		kernel.bind<apiAccountPermissionDataRepository>("apiAccountPermissionDataRepository").to(apiAccountPermissionDataRepositoryImpl);
		kernel.bind<apiAccountRuleDataRepository>("apiAccountRuleDataRepository").to(apiAccountRuleDataRepositoryImpl);

  }


  static bindServices() {
  //Service bindings
		kernel.bind<apiAccountEntryService>("apiAccountEntryService").to(apiAccountEntryService);
		kernel.bind<apiFeeService>("apiFeeService").to(apiFeeService);
		kernel.bind<apiAccountService>("apiAccountService").to(apiAccountService);
		kernel.bind<apiAccountPermissionService>("apiAccountPermissionService").to(apiAccountPermissionService);
		kernel.bind<apiAccountRuleService>("apiAccountRuleService").to(apiAccountRuleService);

  }

  static resolveServices() {
  //Service resolve
		ServiceManager.apiAccountEntryService = kernel.get<apiAccountEntryService>("apiAccountEntryService");
		ServiceManager.apiFeeService = kernel.get<apiFeeService>("apiFeeService");
		ServiceManager.apiAccountService = kernel.get<apiAccountService>("apiAccountService");
		ServiceManager.apiAccountPermissionService = kernel.get<apiAccountPermissionService>("apiAccountPermissionService");
		ServiceManager.apiAccountRuleService = kernel.get<apiAccountRuleService>("apiAccountRuleService");

  }

  static bindDecorators() {
    kernel.bind<ApiRequestDecorator>("ApiRequestDecorator").to(BasicAuthDecorator);
    kernel.bind<string>("string").toConstantValue("test").whenTargetNamed("username");
    kernel.bind<string>("string").toConstantValue("test").whenTargetNamed("password");
  }

  //TODO: NEEDS OWN CONFIG! DECIDE ABOUT OVERWRITING, PROMPTS ETC..
  static bindParsers() {

    kernel.bind<Parser<any>>("Parser").to(HateoasResponseParser).when((request: IRequest) => {
        return true; // return request.parentRequest.serviceIdentifier === 'DogDataRepository'; //TODO: temporary
    });
  }


  //Equivalent of static constructor, called when this class is imported.
  static initialize(){
    if (kernel != null) {
      return;
    }

    kernel =  new Kernel();
    ServiceManager.bindParsers();
    ServiceManager.bindDependentDataLayers();
    ServiceManager.bindServices();
    ServiceManager.bindDecorators();
    ServiceManager.resolveServices();
  }
}
ServiceManager.initialize();
