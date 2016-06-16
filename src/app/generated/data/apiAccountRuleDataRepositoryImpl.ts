import {ApiRepository, List, Model, ApiRequestDecorator, Parser} from  "tsmvc";
import {Promise} from "es6-promise";
import {injectable, inject} from "inversify";

//Current Import
import {apiAccountRule} from "../models/apiAccountRule";
import {apiAccountRuleDataRepository} from "./apiAccountRuleDataRepository";

//Linked Resources
import {apiAccountPermission} from "../models/apiAccountPermission";



@injectable()
export class apiAccountRuleDataRepositoryImpl extends ApiRepository<apiAccountRule> implements apiAccountRuleDataRepository
{
    constructor(
      @inject('ApiRequestDecorator') requestDecorator : ApiRequestDecorator,
      @inject('Parser') requestParser : Parser<apiAccountRule>
    ) {
      super();
      this.requestDecorator = requestDecorator;
      this.parser = requestParser;
    }

  getModelType() : {new (): apiAccountRule} {
    return apiAccountRule;
  }


  //CRUD Operations - Only here for the sake of verbosity and flexibility.
  //Any operations that have standard http://url/up/to/entity/{{id}} are
  //handled out of the box by APIRepository (this is the overriden method).
  find(modelID : string) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountrules/{{id}}/'.replace('{{id}}', modelID),
      'GET',
      null
    );
  }

  findAll() : Promise<List<apiAccountRule>> {
    return this.buildRequestAndParseAsModelList(
      'https://api.fundsrouter.com/accountrules',
      'GET',
      null
    );
  }

  //Finds all entities
  findAllWith(query : string) : Promise<List<apiAccountRule>> {
      return this.buildRequestAndParseAsModelList(
        'https://api.fundsrouter.com/accountrules/' + query,
        'GET',
        null
      );
    }

  addItem(modelItem : apiAccountRule) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountrules',
      'POST',
      modelItem
    );
  }

  removeItem(modelID : string) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountrules/{{id}}/'.replace('{{id}}', modelID),
      'DELETE',
      null
    );
  }


  saveItem(modelItem : apiAccountRule, modelId : string) : Promise<apiAccountRule> {
    return this.buildRequestAndParseAsModel(
      'https://api.fundsrouter.com/accountrules/{{id}}/'.replace('{{id}}', modelId),
      'PUT',
      modelItem
    );
  }


}
