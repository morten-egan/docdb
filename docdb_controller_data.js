docdbControllers.factory("docdbDataFac", function(){

  return {
    sharedObject: {"docname": "ADMINIMPL",
            "docgenerated": "14 Jan 2014",
            "packagelist": [{
                "id": 1,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB_WRITE",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "2",
                    "programName": "write_doc",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 1,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 1,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 2,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 2,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB_TOOLS",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "4",
                    "programName": "prepare_line_for_parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 2,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 3,
                        "paramName": "LINE_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 3,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "6",
                    "programName": "get_metadata_clob",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "CLOB",
                    "programParameters": [{
                        "id": 4,
                        "paramName": "OBJ_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 5,
                        "paramName": "OBJ_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 6,
                        "paramName": "OBJ_SCHEMA",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 4,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "8",
                    "programName": "parse_documentation_line",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 7,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 8,
                        "paramName": "LINE_TO_PARSE",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 5,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "10",
                    "programName": "extract_package_program_name",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 9,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 10,
                        "paramName": "START_FROM_LINE",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 6,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "12",
                    "programName": "parse_program_dictionary",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 11,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "14",
                    "programName": "reset_current_parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 12,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "16",
                    "programName": "display_current_parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 13,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 9,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "18",
                    "programName": "parse_current_as_package_doc",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 14,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 10,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "20",
                    "programName": "parse_current_as_program_doc",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 15,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 3,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB_PARSE",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "22",
                    "programName": "parse_session_start",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 16,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "DESCRIPTION",
                        "paramType": "CLOB",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "24",
                    "programName": "add_schema_to_session",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 19,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "SCHEMA",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "PARSE_PACKAGES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 22,
                        "paramName": "PARSE_PROCEDURES",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "PARSE_FUNCTIONS",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 13,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "26",
                    "programName": "parse_session_end",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 24,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 14,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "28",
                    "programName": "parse",
                    "programType": "PROCEDURE",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 25,
                        "paramName": "PARSER",
                        "paramType": "ADMINIMPL.DOCDB_PARSE.PARSE_TYPE",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 15,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 4,
                "packageOwner": "ADMINIMPL",
                "packageName": "DOCDB",
                "description": " A tool to generate a web based documentation of database plsql code, using new web functionality to build a more responsive and intuitive interface, than existing solutions",
                "project": "Generate PL/SQL documentation from the database",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "30",
                    "programName": "document_schema",
                    "programType": "PROCEDURE",
                    "programDescription": " The top calling procedure to document an entire schema",
                    "programAuthor": "My Other knome",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 26,
                        "paramName": "SCHEMA_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 16,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 5,
                "packageOwner": "ADMINIMPL",
                "packageName": "C_CAOS",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "32",
                    "programName": "create_request",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 27,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "IN_REQUEST_APP_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 31,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "IN_REQUEST_APP_ID",
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
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 35,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "IN_USERID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "IN_KEY",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "IN_ATTRIBUTE_NAMES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 41,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 17,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 18,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "34",
                    "programName": "delete_request",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 42,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 19,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 20,
                        "attribName": "Delete",
                        "attribSet": true
                    },{
                        "id": 21,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 22,
                        "attribName": "Update",
                        "attribSet": true
                    }]
                },{
                    "id": "36",
                    "programName": "move_stage_forward",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 43,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 44,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 23,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 24,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "38",
                    "programName": "move_stage_backward",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 45,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 46,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 25,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 26,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "40",
                    "programName": "move_stage",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 47,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 48,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 49,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 50,
                        "paramName": "IN_SERVICE_COMPONENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 51,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 52,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 27,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 28,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "42",
                    "programName": "get_request_attribute",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 53,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 54,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 55,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 29,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "44",
                    "programName": "set_request_attribute",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 56,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 57,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 58,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 59,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 30,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 6,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_TOOLS",
                "description": " CAOS Tools package <br>  This package includes all the tools nescesarry to implement the CAOS functions in the different packages",
                "project": "CAOS",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "46",
                    "programName": "request_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a request exists from a given ID",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 60,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 61,
                        "paramName": "IN_REQUIRE_OPEN",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 31,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "48",
                    "programName": "request_component_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a component exists in a request",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 62,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 63,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 32,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "50",
                    "programName": "request_component_attr_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a component attribute exists in a request",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 64,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 65,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 66,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 67,
                        "paramName": "IN_REQUIRE_VALUE_SET",
                        "paramType": "BOOLEAN",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 33,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "52",
                    "programName": "service_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a service already exists",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 68,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 34,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "54",
                    "programName": "component_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a component already exists",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 69,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 35,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "56",
                    "programName": "component_stage_bootstrap",
                    "programType": "PROCEDURE",
                    "programDescription": " Bootstrap the stage status of a service request. This makes sure that all component stages gets set to the right status when the request is created in CAOS",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 70,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 71,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 36,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 37,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "58",
                    "programName": "computername_generator",
                    "programType": "FUNCTION",
                    "programDescription": " Helper function to generate a new computername for a CAOS requested machine",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 72,
                        "paramName": "IN_COMPUTERTYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 38,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "60",
                    "programName": "username_generator",
                    "programType": "FUNCTION",
                    "programDescription": " Helper function to generate a new username for a CAOS requested user",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 73,
                        "paramName": "IN_USERNAME_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 39,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "62",
                    "programName": "split_string",
                    "programType": "FUNCTION",
                    "programDescription": " Helper function to split strings, with a supplied delimiter",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ADMINIMPL.SPLIT_TAB",
                    "programParameters": [{
                        "id": 74,
                        "paramName": "P_LIST",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 75,
                        "paramName": "P_DEL",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 40,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "64",
                    "programName": "validate_request_app_call",
                    "programType": "FUNCTION",
                    "programDescription": " Validate a request call from a specific application, of the CAOS system. Every application that can make requests in the CAOS system, supplies a list of attributes and we need to verify that the application has supplied us with the correct attributes.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 76,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 77,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 78,
                        "paramName": "IN_REQUEST_INPUT_NAME",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 79,
                        "paramName": "IN_REQUEST_INPUT_VAL",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 41,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "66",
                    "programName": "get_attribute_def_fix_value",
                    "programType": "FUNCTION",
                    "programDescription": " Check if there is a default or fixed value for an attribute of a component, in a given service call",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 80,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 81,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 42,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "68",
                    "programName": "attribute_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a specific attribute name already exists",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 82,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 43,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "70",
                    "programName": "get_attribute_external_value",
                    "programType": "FUNCTION",
                    "programDescription": " Get external values of attributes which require external objects to obtain a value",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 83,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 84,
                        "paramName": "IN_FAILURE_VAL",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 44,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "72",
                    "programName": "application_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if an application is registered in CAOS by name",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 85,
                        "paramName": "IN_APPLICATION_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the application to check for existence",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 45,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 7,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_SERVICES",
                "description": " CAOS services package delivers the functionality to define services, components and attributes for a caos service.",
                "project": "CAOS",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "74",
                    "programName": "create_service",
                    "programType": "PROCEDURE",
                    "programDescription": " Create a new service framework. You need to add component references for it to actually do anything.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 86,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 87,
                        "paramName": "IN_SERVICE_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 88,
                        "paramName": "IN_SERVICE_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 46,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "76",
                    "programName": "add_service_component",
                    "programType": "PROCEDURE",
                    "programDescription": " Add a component, to use in services.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 89,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 90,
                        "paramName": "IN_SERVICE_STAGE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 91,
                        "paramName": "IN_SERVICE_COMP_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 47,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "78",
                    "programName": "add_service_component_ref",
                    "programType": "PROCEDURE",
                    "programDescription": " Create link between a service and a component",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 92,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 93,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 94,
                        "paramName": "IN_ORDER",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 48,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "80",
                    "programName": "add_attribute",
                    "programType": "PROCEDURE",
                    "programDescription": " Add an attribute to the system.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 95,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 96,
                        "paramName": "IN_ATTRIBUTE_TYPE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 97,
                        "paramName": "IN_ATTRIBUTE_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 98,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 49,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "82",
                    "programName": "add_component_attribute_ref",
                    "programType": "PROCEDURE",
                    "programDescription": " Link an attribute to a component",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 99,
                        "paramName": "IN_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 100,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 101,
                        "paramName": "IN_ATTRIBUTE_ORDER",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 50,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 8,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_REQUESTS",
                "description": " CAOS requests package handles all request creations and updates.",
                "project": "",
                "author": "Morten Egan",
                "version": "",
                "programs": [{
                    "id": "84",
                    "programName": "create_request",
                    "programType": "PROCEDURE",
                    "programDescription": " Create a new request in the CAOS system",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 102,
                        "paramName": "",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 103,
                        "paramName": "",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 104,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 105,
                        "paramName": "IN_REQUEST_APP_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 106,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 107,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 108,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 109,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 110,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 111,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 112,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 113,
                        "paramName": "IN_USERID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 114,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 115,
                        "paramName": "IN_KEY",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 116,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 117,
                        "paramName": "IN_ATTRIBUTE_NAMES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 118,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 51,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "86",
                    "programName": "remove_request",
                    "programType": "PROCEDURE",
                    "programDescription": " Remove a request from the CAOS system",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 119,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 120,
                        "paramName": "IN_FORCE_REMOVE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 52,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "88",
                    "programName": "automic_request_list",
                    "programType": "FUNCTION",
                    "programDescription": " Pipelined function to automic for the request list of active and new requests",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ADMINIMPL.AUTOMIC_REQUEST_TAB",
                    "programParameters": [],
                    "programAttributes": [{
                        "id": 53,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "90",
                    "programName": "move_stage_forward",
                    "programType": "FUNCTION",
                    "programDescription": " Move a request one step forward in execution flow",
                    "programAuthor": "Jesper Fonager",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 121,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 122,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 54,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 55,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "92",
                    "programName": "move_stage_backward",
                    "programType": "FUNCTION",
                    "programDescription": " Move a request one step backwards in execution flow",
                    "programAuthor": "Jesper Fonager",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 123,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 124,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 56,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 57,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "94",
                    "programName": "move_stage",
                    "programType": "FUNCTION",
                    "programDescription": " Move a request to a specifc stage in execution flow",
                    "programAuthor": "Jesper Fonager",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 125,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 126,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 127,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 128,
                        "paramName": "IN_SERVICE_COMPONENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 129,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 130,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 58,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 59,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 9,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_GUI",
                "description": " CAOS GUI A package to supply helper functions to the Bifrost GUI",
                "project": " CAOS",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "96",
                    "programName": "request_list",
                    "programType": "PROCEDURE",
                    "programDescription": " Generate a list of requests in the caos system",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 131,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 132,
                        "paramName": "IN_REQUIRE_OPEN",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 133,
                        "paramName": "OUT_REQUEST_LIST_CUR",
                        "paramType": "REF CURSOR",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 60,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "98",
                    "programName": "request_status",
                    "programType": "PROCEDURE",
                    "programDescription": " Get a status of a all steps in a request",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 134,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 135,
                        "paramName": "OUT_REQUEST_STATUS",
                        "paramType": "REF CURSOR",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 61,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "100",
                    "programName": "request_status_details",
                    "programType": "PROCEDURE",
                    "programDescription": " Get a detailed status of a request, including request attributes and their values",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 136,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 137,
                        "paramName": "OUT_REQUEST_DETAILS",
                        "paramType": "REF CURSOR",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 62,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "102",
                    "programName": "service_component_attr_list",
                    "programType": "PROCEDURE",
                    "programDescription": " List attributes for all components of a specific service",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 138,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 139,
                        "paramName": "OUT_SERVICE_COMP_ATTR",
                        "paramType": "REF CURSOR",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 63,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 10,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS_APPLICATIONS",
                "description": " CAOS APPLICATIONS - This package delivers options to create and maintain applications of the CAOS system. <br>  You can register an application and you can create translation rules for application attributes.",
                "project": "CAOS",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "104",
                    "programName": "register_application",
                    "programType": "PROCEDURE",
                    "programDescription": " Procedure to register an application. The application needs to be registered in CAOS, before any requests can be run from the application.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 140,
                        "paramName": "IN_APPLICATION_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 141,
                        "paramName": "IN_APPLICATION_DESC",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 64,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 11,
                "packageOwner": "ADMINIMPL",
                "packageName": "CAOS",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "106",
                    "programName": "create_request",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 142,
                        "paramName": "IN_REQUEST_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 143,
                        "paramName": "IN_REQUEST_APP_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 144,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 145,
                        "paramName": "IN_REQUEST_APP",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 146,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 147,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 148,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 149,
                        "paramName": "IN_REQUEST_APP_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 150,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 151,
                        "paramName": "IN_USERID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 152,
                        "paramName": "IN_SERVICE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 153,
                        "paramName": "IN_KEY",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 154,
                        "paramName": "IN_ATTRIBUTE_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 155,
                        "paramName": "IN_ATTRIBUTE_NAMES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 156,
                        "paramName": "IN_ATTRIBUTE_VALUES",
                        "paramType": "ADMINIMPL.ATTRIBUTE_LIST",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 65,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 66,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 67,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "108",
                    "programName": "create_request_attr",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 157,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 158,
                        "paramName": "IN_SERVICE_COMPONENT_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 159,
                        "paramName": "IN_ATTRIBUTE_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 160,
                        "paramName": "IN_ATTR_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 68,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 69,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "110",
                    "programName": "move_stage",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 161,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 162,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 163,
                        "paramName": "IN_REQUEST_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 164,
                        "paramName": "IN_SERVICE_COMPONENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 165,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 166,
                        "paramName": "IN_STAGE_ID",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 70,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 71,
                        "attribName": "Update",
                        "attribSet": true
                    }]
                }]
            },{
                "id": 12,
                "packageOwner": "ADMINIMPL",
                "packageName": "AUTO_LOG",
                "description": "",
                "project": "",
                "author": "",
                "version": "",
                "programs": [{
                    "id": "112",
                    "programName": "create_arch_back",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 167,
                        "paramName": "IN_DB_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 168,
                        "paramName": "IN_AGENT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 169,
                        "paramName": "IN_CLIENT",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 170,
                        "paramName": "IN_ARCH_DEST",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 171,
                        "paramName": "IN_THRESHOLD",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 172,
                        "paramName": "IN_ARCH_JOB",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 173,
                        "paramName": "IN_ACTIVE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 72,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 73,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    },{
                        "id": 74,
                        "attribName": "Update",
                        "attribSet": true
                    }]
                },{
                    "id": "114",
                    "programName": "update_arch_back",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 174,
                        "paramName": "IN_DB_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 175,
                        "paramName": "IN_AGENT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 176,
                        "paramName": "IN_CLIENT",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 177,
                        "paramName": "IN_ARCH_DEST",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 178,
                        "paramName": "IN_THRESHOLD",
                        "paramType": "NUMBER",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 179,
                        "paramName": "IN_ARCH_JOB",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 180,
                        "paramName": "IN_ACTIVE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 75,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 76,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                },{
                    "id": "116",
                    "programName": "delete_arch_back",
                    "programType": "FUNCTION",
                    "programDescription": "",
                    "programAuthor": "",
                    "programReturn": "",
                    "programReturnType": "NUMBER",
                    "programParameters": [{
                        "id": 181,
                        "paramName": "IN_DB_NAME_ACT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 77,
                        "attribName": "Delete",
                        "attribSet": true
                    },{
                        "id": 78,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }]
                }]
            }]}
  }; 
  
});