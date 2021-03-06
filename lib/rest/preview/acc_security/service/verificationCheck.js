'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var VerificationCheckList;
var VerificationCheckPage;
var VerificationCheckInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckList
 * @description Initialize the VerificationCheckList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.AccSecurity} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 */
/* jshint ignore:end */
VerificationCheckList = function VerificationCheckList(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function verificationChecks
   * @memberof Twilio.Preview.AccSecurity.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckContext}
   */
  /* jshint ignore:end */
  function VerificationCheckListInstance(sid) {
    return VerificationCheckListInstance.get(sid);
  }

  VerificationCheckListInstance._version = version;
  // Path Solution
  VerificationCheckListInstance._solution = {
    serviceSid: serviceSid
  };
  VerificationCheckListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/VerificationCheck' // jshint ignore:line
  )(VerificationCheckListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a VerificationCheckInstance
   *
   * @function create
   * @memberof Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.serviceSid - The service_sid
   * @param {string} opts.code - The verification string
   * @param {string} [opts.to] - To phonenumber
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed VerificationCheckInstance
   */
  /* jshint ignore:end */
  VerificationCheckListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.code)) {
      throw new Error('Required parameter "opts.code" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Code': _.get(opts, 'code'),
      'To': _.get(opts, 'to')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new VerificationCheckInstance(
        this._version,
        payload
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return VerificationCheckListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckPage
 * @augments Page
 * @description Initialize the VerificationCheckPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.AccSecurity} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns VerificationCheckPage
 */
/* jshint ignore:end */
VerificationCheckPage = function VerificationCheckPage(version, response,
                                                        solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(VerificationCheckPage.prototype, Page.prototype);
VerificationCheckPage.prototype.constructor = VerificationCheckPage;

/* jshint ignore:start */
/**
 * Build an instance of VerificationCheckInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns VerificationCheckInstance
 */
/* jshint ignore:end */
VerificationCheckPage.prototype.getInstance = function getInstance(payload) {
  return new VerificationCheckInstance(
    this._version,
    payload,
    this._solution.serviceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.AccSecurity.ServiceContext.VerificationCheckInstance
 * @description Initialize the VerificationCheckContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid -
 *          A string that uniquely identifies this Verification Check.
 * @property {string} serviceSid - Service Sid.
 * @property {string} accountSid - Account Sid.
 * @property {string} to - To phonenumber
 * @property {verification_check.channel} channel - sms or call
 * @property {string} status - pending, approved, denied or expired
 * @property {boolean} valid - successful verification
 * @property {Date} dateCreated - The date this Verification Check was created
 * @property {Date} dateUpdated - The date this Verification Check was updated
 *
 * @param {Twilio.Preview.AccSecurity} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
VerificationCheckInstance = function VerificationCheckInstance(version, payload,
    serviceSid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.to = payload.to; // jshint ignore:line
  this.channel = payload.channel; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.valid = payload.valid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
  };
};

module.exports = {
  VerificationCheckList: VerificationCheckList,
  VerificationCheckPage: VerificationCheckPage,
  VerificationCheckInstance: VerificationCheckInstance
};
