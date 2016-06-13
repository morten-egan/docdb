
docdbControllers.factory("docdbDataFac", function(){
                return { sharedObject: {"docname": "ADMINIMPL",
            "docgenerated": "22 Jan 2014",
            "packagelist": [{
                "id": 1,
                "packageOwner": "ADMINIMPL",
                "packageName": "AUTO_LOG",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "2",
                    "programName": "create_arch_back",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 1,
                        "paramName": "IN_DB_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 2,
                        "paramName": "IN_AGENT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 3,
                        "paramName": "IN_CLIENT",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 4,
                        "paramName": "IN_ARCH_DEST",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 5,
                        "paramName": "IN_THRESHOLD",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 6,
                        "paramName": "IN_ARCH_JOB",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 7,
                        "paramName": "IN_ACTIVE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 1,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 2,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 3,
                        "attribName": "Update",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 58,
                    "totalCommentLines": 0,
                    "totalDmlLines": 2,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "4",
                    "programName": "update_arch_back",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 8,
                        "paramName": "IN_DB_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 9,
                        "paramName": "IN_AGENT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 10,
                        "paramName": "IN_CLIENT",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 11,
                        "paramName": "IN_ARCH_DEST",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 12,
                        "paramName": "IN_THRESHOLD",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 13,
                        "paramName": "IN_ARCH_JOB",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 14,
                        "paramName": "IN_ACTIVE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 4,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 5,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 38,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "6",
                    "programName": "delete_arch_back",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 15,
                        "paramName": "IN_DB_NAME_ACT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 6,
                        "attribName": "Delete",
                        "attribSet": true
                    },{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 16,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 2,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "8",
                    "programName": "create_request",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 16,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "IN_REQUEST_APP_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 19,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 22,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 24,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 25,
                        "paramName": "IN_USERID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 26,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 27,
                        "paramName": "IN_KEY",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "IN_ATTRIBUTE_NAMES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 9,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 10,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 28,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 2
                }
                },{
                    "id": "10",
                    "programName": "create_request_attr",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 31,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 33,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 34,
                        "paramName": "IN_ATTR_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 33,
                    "totalCommentLines": 0,
                    "totalDmlLines": 2,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "12",
                    "programName": "move_stage",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 35,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "IN_SERVICE_COMPONENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 13,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 14,
                        "attribName": "Update",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 25,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 3,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_APPLICATIONS",
                "description": " CAOS APPLICATIONS - This package delivers options to create and maintain applications of the CAOS system. <br>  You can register an application and you can create translation rules for application attributes.",
                "project": "CAOS",
                "author": "Morten Egan",
                "version": "1.0",
                "programs": [{
                    "id": "14",
                    "programName": "register_application",
                    "programType": "PROCEDURE",
                    "programDescription": " Procedure to register an application. The application needs to be registered in CAOS, before any requests can be run from the application.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 41,
                        "paramName": "IN_APPLICATION_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the application to register.",
                        "paramDefaultValue": ""
                    },{
                        "id": 42,
                        "paramName": "IN_APPLICATION_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A description of the application.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 15,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 16,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 17,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 31,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 2
                }
                }]
            },{
                "id": 4,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_GUI",
                "description": " CAOS GUI A package to supply helper functions to the Bifrost GUI",
                "project": " CAOS",
                "author": "Morten Egan",
                "version": "1.0",
                "programs": [{
                    "id": "16",
                    "programName": "request_list",
                    "programType": "PROCEDURE",
                    "programDescription": " Generate a list of requests in the caos system",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 43,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Filter the requests to a specific owner",
                        "paramDefaultValue": ""
                    },{
                        "id": 44,
                        "paramName": "IN_REQUIRE_OPEN",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Require the requests to be open",
                        "paramDefaultValue": ""
                    },{
                        "id": 45,
                        "paramName": "OUT_REQUEST_LIST_CUR",
                        "paramType": "REF CURSOR",
                        "paramDescription": "The ref cursor with the list",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 18,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 89,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "18",
                    "programName": "request_status",
                    "programType": "PROCEDURE",
                    "programDescription": " Get a status of a all steps in a request",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 46,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to get a status of",
                        "paramDefaultValue": ""
                    },{
                        "id": 47,
                        "paramName": "OUT_REQUEST_STATUS",
                        "paramType": "REF CURSOR",
                        "paramDescription": "The ref cursor with the status",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 19,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 37,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "20",
                    "programName": "request_status_details",
                    "programType": "PROCEDURE",
                    "programDescription": " Get a detailed status of a request, including request attributes and their values",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 48,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to get detailed information from",
                        "paramDefaultValue": ""
                    },{
                        "id": 49,
                        "paramName": "OUT_REQUEST_DETAILS",
                        "paramType": "REF CURSOR",
                        "paramDescription": "The ref cursor with the details",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 20,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 24,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "22",
                    "programName": "service_component_attr_list",
                    "programType": "PROCEDURE",
                    "programDescription": " List attributes for all components of a specific service",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 50,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service to list component attributes from",
                        "paramDefaultValue": ""
                    },{
                        "id": 51,
                        "paramName": "OUT_SERVICE_COMP_ATTR",
                        "paramType": "REF CURSOR",
                        "paramDescription": "The ref cursor with the list",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 21,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 49,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 5,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_REQUESTS",
                "description": " CAOS requests package handles all request creations and updates.",
                "project": "CAOS",
                "author": "Morten Egan",
                "version": "1.0",
                "programs": [{
                    "id": "24",
                    "programName": "create_request",
                    "programType": "PROCEDURE",
                    "programDescription": " Create a new request in the CAOS system",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 52,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The glogon id of the user making the request.",
                        "paramDefaultValue": ""
                    },{
                        "id": 53,
                        "paramName": "IN_REQUEST_APP_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 54,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 55,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The application name that makes the request. The application needs to be know tho the system.",
                        "paramDefaultValue": ""
                    },{
                        "id": 56,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 57,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The applications ID to keep track of the request.",
                        "paramDefaultValue": ""
                    },{
                        "id": 58,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 59,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The applications ID to keep track of the request.",
                        "paramDefaultValue": ""
                    },{
                        "id": 60,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service that the application request.",
                        "paramDefaultValue": ""
                    },{
                        "id": 61,
                        "paramName": "IN_USERID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 62,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service that the application request.",
                        "paramDefaultValue": ""
                    },{
                        "id": 63,
                        "paramName": "IN_KEY",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 64,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 65,
                        "paramName": "IN_ATTRIBUTE_NAMES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "An array of the attributes sent from the requesting application.",
                        "paramDefaultValue": ""
                    },{
                        "id": 66,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "Corresponding array to the name array. So val_array(1) holds the value for name_array(1)",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 22,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 23,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 24,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 25,
                        "attribName": "Rollback",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 86,
                    "totalCommentLines": 8,
                    "totalDmlLines": 3,
                    "totalTransactionLines": 4
                }
                },{
                    "id": "26",
                    "programName": "remove_request",
                    "programType": "PROCEDURE",
                    "programDescription": " Remove a request from the CAOS system",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 67,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to remove.",
                        "paramDefaultValue": ""
                    },{
                        "id": 68,
                        "paramName": "IN_FORCE_REMOVE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "If Y then force remove even though it is executing. Defaults to N",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 26,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 27,
                        "attribName": "Delete",
                        "attribSet": true
                    },{
                        "id": 28,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 29,
                        "attribName": "Rollback",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 72,
                    "totalCommentLines": 1,
                    "totalDmlLines": 6,
                    "totalTransactionLines": 7
                }
                },{
                    "id": "28",
                    "programName": "automic_request_list",
                    "programType": "FUNCTION",
                    "programDescription": " Pipelined function to automic for the request list of active and new requests",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Record of automic_request_obj object",
                    "programReturnType": "ADMINIMPL.AUTOMIC_REQUEST_TAB",
                    "programParameters": [],
                    "programAttributes": [{
                        "id": 30,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 137,
                    "totalCommentLines": 4,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "30",
                    "programName": "move_stage_forward",
                    "programType": "FUNCTION",
                    "programDescription": " Move a request one step forward in execution flow",
                    "programAuthor": "Jesper Fonager",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 69,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to step forward",
                        "paramDefaultValue": ""
                    },{
                        "id": 70,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to step forward",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 31,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 52,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "32",
                    "programName": "move_stage_backward",
                    "programType": "FUNCTION",
                    "programDescription": " Move a request one step backwards in execution flow",
                    "programAuthor": "Jesper Fonager",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 71,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to step backward",
                        "paramDefaultValue": ""
                    },{
                        "id": 72,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to step backward",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 32,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 52,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "34",
                    "programName": "move_stage",
                    "programType": "FUNCTION",
                    "programDescription": " Move a request to a specifc stage in execution flow",
                    "programAuthor": "Jesper Fonager",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 73,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to move stage",
                        "paramDefaultValue": ""
                    },{
                        "id": 74,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to move stage",
                        "paramDefaultValue": ""
                    },{
                        "id": 75,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the request to move stage",
                        "paramDefaultValue": ""
                    },{
                        "id": 76,
                        "paramName": "IN_SERVICE_COMPONENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 77,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The stage to move the request to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 78,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The stage to move the request to.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 33,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 52,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 6,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_SERVICES",
                "description": " CAOS services package delivers the functionality to define services, components and attributes for a caos service.",
                "project": "CAOS",
                "author": "Morten Egan",
                "version": "1.0",
                "programs": [{
                    "id": "36",
                    "programName": "create_service",
                    "programType": "PROCEDURE",
                    "programDescription": " Create a new service framework. You need to add component references for it to actually do anything.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 79,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The new name of the service",
                        "paramDefaultValue": ""
                    },{
                        "id": 80,
                        "paramName": "IN_SERVICE_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Type of the service. Not used for anything right now. Use default value.",
                        "paramDefaultValue": ""
                    },{
                        "id": 81,
                        "paramName": "IN_SERVICE_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A description of the offered service.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 34,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 35,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 28,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "38",
                    "programName": "add_service_component",
                    "programType": "PROCEDURE",
                    "programDescription": " Add a component, to use in services.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 82,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the component",
                        "paramDefaultValue": ""
                    },{
                        "id": 83,
                        "paramName": "IN_SERVICE_STAGE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 84,
                        "paramName": "IN_SERVICE_COMP_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A description of the component.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 36,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 37,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 38,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 34,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 2
                }
                },{
                    "id": "40",
                    "programName": "add_service_component_ref",
                    "programType": "PROCEDURE",
                    "programDescription": " Create link between a service and a component",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 85,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service to link the component to",
                        "paramDefaultValue": ""
                    },{
                        "id": 86,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The component to link with",
                        "paramDefaultValue": ""
                    },{
                        "id": 87,
                        "paramName": "IN_ORDER",
                        "paramType": "NUMBER",
                        "paramDescription": "The order of the component in the service. Defaults to next.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 39,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 40,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 41,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 42,
                        "attribName": "Update",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 63,
                    "totalCommentLines": 2,
                    "totalDmlLines": 2,
                    "totalTransactionLines": 3
                }
                },{
                    "id": "42",
                    "programName": "add_attribute",
                    "programType": "PROCEDURE",
                    "programDescription": " Add an attribute to the system.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 88,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the attribute.",
                        "paramDefaultValue": ""
                    },{
                        "id": 89,
                        "paramName": "IN_ATTRIBUTE_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The type of the attribute. Defaults to string type.",
                        "paramDefaultValue": ""
                    },{
                        "id": 90,
                        "paramName": "IN_ATTRIBUTE_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A description of the attribute.",
                        "paramDefaultValue": ""
                    },{
                        "id": 91,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A separated list of default values. Separated by the pipe "|" character.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 43,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 44,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 45,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 59,
                    "totalCommentLines": 1,
                    "totalDmlLines": 2,
                    "totalTransactionLines": 3
                }
                },{
                    "id": "44",
                    "programName": "add_component_attribute_ref",
                    "programType": "PROCEDURE",
                    "programDescription": " Link an attribute to a component",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 92,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Component to bind attribute to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 93,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Attribute to bind.",
                        "paramDefaultValue": ""
                    },{
                        "id": 94,
                        "paramName": "IN_ATTRIBUTE_ORDER",
                        "paramType": "NUMBER",
                        "paramDescription": "Order of the attribute to other component attributes. Defaults to next value.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 46,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 47,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 48,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 49,
                        "attribName": "Update",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 56,
                    "totalCommentLines": 4,
                    "totalDmlLines": 2,
                    "totalTransactionLines": 3
                }
                }]
            },{
                "id": 7,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_TOOLS",
                "description": " CAOS Tools package <br>  This package includes all the tools nescesarry to implement the CAOS functions in the different packages",
                "project": "CAOS",
                "author": "Morten Egan",
                "version": "1.0",
                "programs": [{
                    "id": "46",
                    "programName": "request_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a request exists from a given ID",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if request exists, False if not",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 95,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The request ID",
                        "paramDefaultValue": ""
                    },{
                        "id": 96,
                        "paramName": "IN_REQUIRE_OPEN",
                        "paramType": "BOOLEAN",
                        "paramDescription": "Also require if the request exists and is open",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 50,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 49,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "48",
                    "programName": "request_component_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a component exists in a request",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if request component exists, False if not",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 97,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The request id",
                        "paramDefaultValue": ""
                    },{
                        "id": 98,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The component to check for",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 51,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 34,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "50",
                    "programName": "request_component_attr_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a component attribute exists in a request",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if request component attribute exists, False if not",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 99,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The request id",
                        "paramDefaultValue": ""
                    },{
                        "id": 100,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The component to check for",
                        "paramDefaultValue": ""
                    },{
                        "id": 101,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The attribute to check for",
                        "paramDefaultValue": ""
                    },{
                        "id": 102,
                        "paramName": "IN_REQUIRE_VALUE_SET",
                        "paramType": "BOOLEAN",
                        "paramDescription": "Require that if attribute exists, that is also set to a value",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 52,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 49,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "52",
                    "programName": "service_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a service already exists",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if service exists, False if not",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 103,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service name",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 53,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 31,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "54",
                    "programName": "component_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a component already exists",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if component exists, False if not",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 104,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The component name",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 54,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 31,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "56",
                    "programName": "component_stage_bootstrap",
                    "programType": "PROCEDURE",
                    "programDescription": " Bootstrap the stage status of a service request. This makes sure that all component stages gets set to the right status when the request is created in CAOS",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 105,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service name of the request",
                        "paramDefaultValue": ""
                    },{
                        "id": 106,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The request id",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 55,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 56,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 55,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "58",
                    "programName": "computername_generator",
                    "programType": "FUNCTION",
                    "programDescription": " Helper function to generate a new computername for a CAOS requested machine",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The generated machine name, guarenteed to be unique within the CAOS system",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 107,
                        "paramName": "IN_COMPUTERTYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The type of machine to generate a name for",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 57,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 32,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "60",
                    "programName": "username_generator",
                    "programType": "FUNCTION",
                    "programDescription": " Helper function to generate a new username for a CAOS requested user",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The generated username, guarenteed to be unique within the CAOS system",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 108,
                        "paramName": "IN_USERNAME_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The type of user to generate a name for",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 58,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 29,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "62",
                    "programName": "split_string",
                    "programType": "FUNCTION",
                    "programDescription": " Helper function to split strings, with a supplied delimiter",
                    "programAuthor": "Morten Egan",
                    "programReturn": "A table function returning a row for every splitted element",
                    "programReturnType": "ADMINIMPL.SPLIT_TAB",
                    "programParameters": [{
                        "id": 109,
                        "paramName": "P_LIST",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The string to split",
                        "paramDefaultValue": ""
                    },{
                        "id": 110,
                        "paramName": "P_DEL",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The delimiter to use, when string is splitted",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 59,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 24,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "64",
                    "programName": "validate_request_app_call",
                    "programType": "FUNCTION",
                    "programDescription": " Validate a request call from a specific application, of the CAOS system. Every application that can make requests in the CAOS system, supplies a list of attributes and we need to verify that the application has supplied us with the correct attributes.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the applications call for the request matches the requirements",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 111,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the application making the request",
                        "paramDefaultValue": ""
                    },{
                        "id": 112,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service that the request is for",
                        "paramDefaultValue": ""
                    },{
                        "id": 113,
                        "paramName": "IN_REQUEST_INPUT_NAME",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "A list of input parameters",
                        "paramDefaultValue": ""
                    },{
                        "id": 114,
                        "paramName": "IN_REQUEST_INPUT_VAL",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "A list of values for the input parameters.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 60,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 42,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "66",
                    "programName": "get_attribute_def_fix_value",
                    "programType": "FUNCTION",
                    "programDescription": " Check if there is a default or fixed value for an attribute of a component, in a given service call",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Returns the default or fixed value if any, null if none.",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 115,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The service name",
                        "paramDefaultValue": ""
                    },{
                        "id": 116,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The attribute name",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 61,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 65,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "68",
                    "programName": "attribute_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a specific attribute name already exists",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Returns True if it exists, False if not",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 117,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The attribute name",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 62,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 31,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "70",
                    "programName": "get_attribute_external_value",
                    "programType": "FUNCTION",
                    "programDescription": " Get external values of attributes which require external objects to obtain a value",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Returns the value for the attribute",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 118,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the attribute",
                        "paramDefaultValue": ""
                    },{
                        "id": 119,
                        "paramName": "IN_FAILURE_VAL",
                        "paramType": "VARCHAR2",
                        "paramDescription": "If the external call fails, what should the value for the attribute be",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 63,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 21,
                    "totalCommentLines": 1,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "72",
                    "programName": "application_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if an application is registered in CAOS by name",
                    "programAuthor": "",
                    "programReturn": "Returns true if the application already exists, false if not.",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 120,
                        "paramName": "IN_APPLICATION_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the application to check for existence",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 64,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 31,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 8,
                "packageOwner": "ADMINIMPL",
                "packageName": "C_CAOS",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "74",
                    "programName": "create_request",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 121,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 122,
                        "paramName": "IN_REQUEST_APP_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 123,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 124,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 125,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 126,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 127,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 128,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 129,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 130,
                        "paramName": "IN_USERID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 131,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 132,
                        "paramName": "IN_KEY",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 133,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 134,
                        "paramName": "IN_ATTRIBUTE_NAMES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 135,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 65,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 66,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 30,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "76",
                    "programName": "delete_request",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 136,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 67,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 68,
                        "attribName": "Delete",
                        "attribSet": true
                    },{
                        "id": 69,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 38,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 2
                }
                },{
                    "id": "78",
                    "programName": "move_stage_forward",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 137,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 138,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 70,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 52,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "80",
                    "programName": "move_stage_backward",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 139,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 140,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 71,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 52,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "82",
                    "programName": "move_stage",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 141,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 142,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 143,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 144,
                        "paramName": "IN_SERVICE_COMPONENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 145,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 146,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 72,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 52,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "84",
                    "programName": "get_request_attribute",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 147,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 148,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 149,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 73,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 43,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "86",
                    "programName": "set_request_attribute",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 150,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 151,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 152,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 153,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 74,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 34,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 9,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "88",
                    "programName": "document_schema",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 154,
                        "paramName": "SCHEMA_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 155,
                        "paramName": "DOCUMENT_SETTINGS",
                        "paramType": "ADMINIMPL.DOCDB.DOCDB_SETTINGS",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 75,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 20,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "90",
                    "programName": "document_current",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 156,
                        "paramName": "DOCUMENT_SETTINGS",
                        "paramType": "ADMINIMPL.DOCDB.DOCDB_SETTINGS",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 76,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 20,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "92",
                    "programName": "document_package",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 157,
                        "paramName": "PACKAGE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 158,
                        "paramName": "SCHEMA_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 159,
                        "paramName": "DOCUMENT_SETTINGS",
                        "paramType": "ADMINIMPL.DOCDB.DOCDB_SETTINGS",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 77,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 22,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 10,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB_PARSE",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "94",
                    "programName": "parse_session_start",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 160,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 161,
                        "paramName": "NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 162,
                        "paramName": "DESCRIPTION",
                        "paramType": "CLOB",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 78,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 32,
                    "totalCommentLines": 4,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "96",
                    "programName": "add_schema_to_session",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 163,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 164,
                        "paramName": "SCHEMA",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 165,
                        "paramName": "PARSE_PACKAGES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 166,
                        "paramName": "PARSE_PROCEDURES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 167,
                        "paramName": "PARSE_FUNCTIONS",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 79,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 34,
                    "totalCommentLines": 2,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "98",
                    "programName": "parse_session_end",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 168,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 80,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 12,
                    "totalCommentLines": 1,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "100",
                    "programName": "parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 169,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 81,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 11,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "102",
                    "programName": "add_current_schema",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 170,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 171,
                        "paramName": "PARSE_PACKAGES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 172,
                        "paramName": "PARSE_PROCEDURES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 173,
                        "paramName": "PARSE_FUNCTIONS",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 82,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 14,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "104",
                    "programName": "add_package",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 174,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 175,
                        "paramName": "PACKAGE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 176,
                        "paramName": "PACKAGE_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 83,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 17,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "106",
                    "programName": "add_multiple_schemas",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 177,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 178,
                        "paramName": "SCHEMAS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 179,
                        "paramName": "PARSE_PACKAGES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 180,
                        "paramName": "PARSE_PROCEDURES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 181,
                        "paramName": "PARSE_FUNCTIONS",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 84,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 20,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 11,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB_TOOLS",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "108",
                    "programName": "prepare_line_for_parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 182,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 183,
                        "paramName": "LINE_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 85,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 16,
                    "totalCommentLines": 1,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "110",
                    "programName": "get_metadata_clob",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "CLOB",
                    "programParameters": [{
                        "id": 184,
                        "paramName": "OBJ_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 185,
                        "paramName": "OBJ_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 186,
                        "paramName": "OBJ_SCHEMA",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 86,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 18,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "112",
                    "programName": "parse_documentation_line",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 187,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 188,
                        "paramName": "LINE_TO_PARSE",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 87,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 30,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "114",
                    "programName": "extract_package_program_name",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 189,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 190,
                        "paramName": "START_FROM_LINE",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 88,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 16,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "116",
                    "programName": "parse_program_dictionary",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 191,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 89,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 64,
                    "totalCommentLines": 4,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "118",
                    "programName": "reset_current_parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 192,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 90,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 43,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "120",
                    "programName": "display_current_parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 193,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 91,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 27,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "122",
                    "programName": "parse_current_as_package_doc",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 194,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 92,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 16,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "124",
                    "programName": "parse_current_as_program_doc",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 195,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 93,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 15,
                    "totalCommentLines": 1,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "126",
                    "programName": "check_if_schema_already_there",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 196,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 197,
                        "paramName": "SCHEMA_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 94,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 14,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "128",
                    "programName": "check_if_pkg_already_loaded",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 198,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 199,
                        "paramName": "SCHEMA_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 200,
                        "paramName": "PACKAGE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 95,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 20,
                    "totalCommentLines": 2,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 12,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB_WRITE",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "130",
                    "programName": "write_doc",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 201,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 96,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 97,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 46,
                    "totalCommentLines": 3,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 1
                }
                },{
                    "id": "132",
                    "programName": "set_write_attribute",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 202,
                        "paramName": "ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 203,
                        "paramName": "ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 98,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 12,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            }]}};
                });