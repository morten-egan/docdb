
docdbControllers.factory("docdbDataFac", function(){
                return { sharedObject: {"docname": "ORACLEGIT",
            "docgenerated": "13 Feb 2014",
            "packagelist": [{
                "id": 1,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB",
                "description": " Github api communication",
                "project": "OracleGit",
                "author": "Morten Egan (github.com/morten-egan)",
                "version": "0.1.0",
                "programs": [{
                    "id": "2",
                    "programName": "encode64_clob",
                    "programType": "FUNCTION",
                    "programDescription": " Helper function to base64 encode content",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The content data as base64",
                    "programReturnType": "CLOB",
                    "programParameters": [{
                        "id": 1,
                        "paramName": "CONTENT",
                        "paramType": "CLOB",
                        "paramDescription": "The data to encode",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 1,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 20,
                    "totalCommentLines": 1,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "4",
                    "programName": "set_default_parameter",
                    "programType": "PROCEDURE",
                    "programDescription": " Set default parameters for your GitHub session, such as API endpoint location and more.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 2,
                        "paramName": "PARAMETER_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the variable to set.",
                        "paramDefaultValue": ""
                    },{
                        "id": 3,
                        "paramName": "PARAMETER_VALUE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The value of the parameter.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 2,
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
                    "id": "6",
                    "programName": "set_session_wallet",
                    "programType": "PROCEDURE",
                    "programDescription": " Set the Oracle wallet location and password",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 4,
                        "paramName": "WALLET_LOCATION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The location on the filesystem, excluding filename and trailing slash",
                        "paramDefaultValue": ""
                    },{
                        "id": 5,
                        "paramName": "WALLET_PASSWORD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Password to the wallet file. If autologin enabled on wallet, this should be null",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 3,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 13,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "8",
                    "programName": "set_logon_info",
                    "programType": "PROCEDURE",
                    "programDescription": " Set the account and password for the github session",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 6,
                        "paramName": "GITHUB_USERNAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The GitHub account name",
                        "paramDefaultValue": ""
                    },{
                        "id": 7,
                        "paramName": "GITHUB_PASSWORD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The password for the github account",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 4,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 13,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "10",
                    "programName": "get_session_github_user",
                    "programType": "FUNCTION",
                    "programDescription": " Get the current github username set for the session",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Current set github username for session",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [],
                    "programAttributes": [{
                        "id": 5,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 10,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "12",
                    "programName": "github_committer_hash",
                    "programType": "FUNCTION",
                    "programDescription": " Create a committer hash for github content and commit calls",
                    "programAuthor": "Morten Egan",
                    "programReturn": "A pljson stucture of github committer hash",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [],
                    "programAttributes": [{
                        "id": 6,
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
                    "id": "14",
                    "programName": "talk",
                    "programType": "PROCEDURE",
                    "programDescription": " Send request to github api",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 8,
                        "paramName": "GITHUB_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account to use as api user",
                        "paramDefaultValue": ""
                    },{
                        "id": 9,
                        "paramName": "API_ENDPOINT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The API endpoint to use",
                        "paramDefaultValue": ""
                    },{
                        "id": 10,
                        "paramName": "ENDPOINT_METHOD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "HTTP method",
                        "paramDefaultValue": ""
                    },{
                        "id": 11,
                        "paramName": "API_DATA",
                        "paramType": "CLOB",
                        "paramDescription": "The data package to the endpoint",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 83,
                    "totalCommentLines": 11,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 2,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES",
                "description": " Interface to github issues API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "16",
                    "programName": "create_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Create an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 12,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 13,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 14,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 15,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 16,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "18",
                    "programName": "get_single_issue",
                    "programType": "FUNCTION",
                    "programDescription": " Get a single issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 19,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 9,
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
                    "id": "20",
                    "programName": "get_repository_issues",
                    "programType": "FUNCTION",
                    "programDescription": " Get issues for a specific repositories",
                    "programAuthor": "Morten Egan",
                    "programReturn": "m since Only issues updated at or after this time are returned. This is a string timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 22,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 24,
                        "paramName": "MILESTONE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 25,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 26,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user. Default: *",
                        "paramDefaultValue": ""
                    },{
                        "id": 27,
                        "paramName": "CREATOR",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The user that created the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "MENTIONED",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A user that���s mentioned in the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A list of comma separated label names. Example: bug,ui,@high",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "What to sort results by. Can be either created, updated, comments. Default: created",
                        "paramDefaultValue": ""
                    },{
                        "id": 31,
                        "paramName": "DIRECTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The direction of the sort. Can be either asc or desc. Default: desc",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "SINCE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 10,
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
                    "id": "22",
                    "programName": "edit_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Edit an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 33,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 34,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 35,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "State of the issue. Either open or closed.",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 41,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 25,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 3,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES_ASSIGNEES",
                "description": " Interface to github issues assignees API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "24",
                    "programName": "list_assignees",
                    "programType": "FUNCTION",
                    "programDescription": " List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The list of available assignees",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 42,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 43,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "26",
                    "programName": "check_assignee",
                    "programType": "FUNCTION",
                    "programDescription": " Check assignee. You may also check to see if a particular user is an assignee for a repository.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the assignee is part of repository",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 44,
                        "paramName": "GI",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 16,
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
                    "id": "34",
                    "programName": "create_comment",
                    "programType": "PROCEDURE",
                    "programDescription": " Create a comment",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 58,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 59,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 60,
                        "paramName": "ISSUE_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the issue to comment on",
                        "paramDefaultValue": ""
                    },{
                        "id": 61,
                        "paramName": "BODY",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The comment to create",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 17,
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
                    "id": "36",
                    "programName": "edit_comment",
                    "programType": "PROCEDURE",
                    "programDescription": " Edit a comment",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 62,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 63,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 64,
                        "paramName": "COMMENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the issue to comment on",
                        "paramDefaultValue": ""
                    },{
                        "id": 65,
                        "paramName": "BODY",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The comment to create",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 18,
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
                    "id": "38",
                    "programName": "delete_comment",
                    "programType": "PROCEDURE",
                    "programDescription": " Delete a comment",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 66,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 67,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 68,
                        "paramName": "COMMENT_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the comment to delete",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 19,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 21,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 5,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES_EVENTS",
                "description": " Interface to Github issues events API",
                "project": "OracleGit",
                "author": "Morten Egan (github.com/morten-egan)",
                "version": "0.1.0",
                "programs": [{
                    "id": "40",
                    "programName": "list_issue_events",
                    "programType": "FUNCTION",
                    "programDescription": " List events for an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The JSON data on all events for specified issue",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 69,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 70,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 71,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the issue",
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
                    "totalD Send request to github api",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 8,
                        "paramName": "GITHUB_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account to use as api user",
                        "paramDefaultValue": ""
                    },{
                        "id": 9,
                        "paramName": "API_ENDPOINT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The API endpoint to use",
                        "paramDefaultValue": ""
                    },{
                        "id": 10,
                        "paramName": "ENDPOINT_METHOD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "HTTP method",
                        "paramDefaultValue": ""
                    },{
                        "id": 11,
                        "paramName": "API_DATA",
                        "paramType": "CLOB",
                        "paramDescription": "The data package to the endpoint",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 83,
                    "totalCommentLines": 11,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 2,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES",
                "description": " Interface to github issues API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "16",
                    "programName": "create_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Create an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 12,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 13,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 14,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 15,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 16,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "18",
                    "programName": "get_single_issue",
                    "programType": "FUNCTION",
                    "programDescription": " Get a single issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 19,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 9,
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
                    "id": "20",
                    "programName": "get_repository_issues",
                    "programType": "FUNCTION",
                    "programDescription": " Get issues for a specific repositories",
                    "programAuthor": "Morten Egan",
                    "programReturn": "m since Only issues updated at or after this time are returned. This is a string timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 22,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 24,
                        "paramName": "MILESTONE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 25,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 26,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user. Default: *",
                        "paramDefaultValue": ""
                    },{
                        "id": 27,
                        "paramName": "CREATOR",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The user that created the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "MENTIONED",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A user that���s mentioned in the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A list of comma separated label names. Example: bug,ui,@high",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "What to sort results by. Can be either created, updated, comments. Default: created",
                        "paramDefaultValue": ""
                    },{
                        "id": 31,
                        "paramName": "DIRECTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The direction of the sort. Can be either asc or desc. Default: desc",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "SINCE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 10,
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
                    "id": "22",
                    "programName": "edit_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Edit an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 33,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 34,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 35,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "State of the issue. Either open or closed.",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 41,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 25,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 3,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES_ASSIGNEES",
                "description": " Interface to github issues assignees API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "24",
                    "programName": "list_assignees",
                    "programType": "FUNCTION",
                    "programDescription": " List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The list of available assignees",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 42,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 43,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "26",
                    "programName": "check_assignee",
                    "programType": "FUNCTION",
                    "programDescription": " Check assignee. You may also check to see if a particular user is an assignee for a repository.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the assignee is part of repository",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 44,
                        "paramName": "GIce to github issues milestones API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "68",
                    "programName": "list_milestones",
                    "programType": "FUNCTION",
                    "programDescription": " List milestones for a repository",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Milestones for the repository",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 114,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 115,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 116,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The state of the milestone. Either open or closed. Default: open",
                        "paramDefaultValue": ""
                    },{
                        "id": 117,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "What to sort results by. Either due_date or completeness. Default: due_date",
                        "paramDefaultValue": ""
                    },{
                        "id": 118,
                        "paramName": "DIRECTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The direction of the sort. Either asc or desc. Default: asc",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 34,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 33,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "70",
                    "programName": "get_milestone",
                    "programType": "FUNCTION",
                    "programDescription": " Get a single milestone",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The JSON object of a milestone",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 119,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 120,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 121,
                        "paramName": "MILESTONE_ID",
                        "paramType": "NUMBER",
                        "paramDescription": "The id of the milestone to get",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 35,
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
                    "id": "72",
                    "programName": "create_milestone",
                    "programType": "PROCEDURE",
                    "programDescription": " Create a milestone",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 122,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 123,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 124,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the milestone.",
                        "paramDefaultValue": ""
                    },{
                        "id": 125,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The state of the milestone. Either open or closed. Default: open",
                        "paramDefaultValue": ""
                    },{
                        "id": 126,
                        "paramName": "DESCRIPTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A description of the milestone.",
                        "paramDefaultValue": ""
                    },{
                        "id": 127,
                        "paramName": "DUE_ON",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The milestone due date. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 36,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "74",
                    "programName": "update_milestone",
                    "programType": "PROCEDURE",
                    "programDescription": " Update a milestone",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 128,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 129,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 83,
                    "totalCommentLines": 11,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 2,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES",
                "description": " Interface to github issues API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "16",
                    "programName": "create_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Create an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 12,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 13,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 14,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 15,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 16,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "18",
                    "programName": "get_single_issue",
                    "programType": "FUNCTION",
                    "programDescription": " Get a single issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 19,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 9,
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
                    "id": "20",
                    "programName": "get_repository_issues",
                    "programType": "FUNCTION",
                    "programDescription": " Get issues for a specific repositories",
                    "programAuthor": "Morten Egan",
                    "programReturn": "m since Only issues updated at or after this time are returned. This is a string timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 22,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 24,
                        "paramName": "MILESTONE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 25,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 26,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user. Default: *",
                        "paramDefaultValue": ""
                    },{
                        "id": 27,
                        "paramName": "CREATOR",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The user that created the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "MENTIONED",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A user that���s mentioned in the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A list of comma separated label names. Example: bug,ui,@high",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "What to sort results by. Can be either created, updated, comments. Default: created",
                        "paramDefaultValue": ""
                    },{
                        "id": 31,
                        "paramName": "DIRECTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The direction of the sort. Can be either asc or desc. Default: desc",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "SINCE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 10,
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
                    "id": "22",
                    "programName": "edit_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Edit an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 33,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 34,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 35,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "State of the issue. Either open or closed.",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 41,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 25,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 3,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES_ASSIGNEES",
                "description": " Interface to github issues assignees API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "24",
                    "programName": "list_assignees",
                    "programType": "FUNCTION",
                    "programDescription": " List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The list of available assignees",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 42,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 43,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "26",
                    "programName": "check_assignee",
                    "programType": "FUNCTION",
                    "programDescription": " Check assignee. You may also check to see if a particular user is an assignee for a repository.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the assignee is part of repository",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 44,
                        "paramName": "GI              "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "94",
                    "programName": "repos_branches",
                    "programType": "FUNCTION",
                    "programDescription": " List branches for the specified repository",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Branches in the repository",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 179,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 180,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 47,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "96",
                    "programName": "repos_branch_get",
                    "programType": "FUNCTION",
                    "programDescription": " Get specific branch in repository",
                    "programAuthor": "Morten Egan",
                    "programReturn": "Branch details of specified branch",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 181,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 182,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 183,
                        "paramName": "BRANCH",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 48,
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
                    "id": "98",
                    "programName": "repos_delete",
                    "programType": "PROCEDURE",
                    "programDescription": " Deleting a repository requires admin access. If OAuth is used, the delete_repo scope is required.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 184,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 185,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 49,
                        "attribName": "Delete",
                        "attribSet": true
                    },{
                        "id": 50,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 20,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 9,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_REPOS_COLLABORATORS",
                "description": " Interface to github repositories collaborators API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "100",
                    "programName": "list_collaborators",
                    "programType": "FUNCTION",
                    "programDescription": " List collaborators",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 186,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 187,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 51,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "102",
                    "programName": "check_collaborator",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a user is a collaborator",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the user is a collaborator of the repository",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 188,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 189,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 190,
                        "paramName": "COLLABORATOR",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 52,
                        "attribName": "No Inst Send request to github api",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 8,
                        "paramName": "GITHUB_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account to use as api user",
                        "paramDefaultValue": ""
                    },{
                        "id": 9,
                        "paramName": "API_ENDPOINT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The API endpoint to use",
                        "paramDefaultValue": ""
                    },{
                        "id": 10,
                        "paramName": "ENDPOINT_METHOD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "HTTP method",
                        "paramDefaultValue": ""
                    },{
                        "id": 11,
                        "paramName": "API_DATA",
                        "paramType": "CLOB",
                        "paramDescription": "The data package to the endpoint",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 83,
                    "totalCommentLines": 11,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 2,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES",
                "description": " Interface to github issues API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "16",
                    "programName": "create_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Create an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 12,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 13,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 14,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 15,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 16,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "18",
                    "programName": "get_single_issue",
                    "programType": "FUNCTION",
                    "programDescription": " Get a single issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 19,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 9,
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
                    "id": "20",
                    "programName": "get_repository_issues",
                    "programType": "FUNCTION",
                    "programDescription": " Get issues for a specific repositories",
                    "programAuthor": "Morten Egan",
                    "programReturn": "m since Only issues updated at or after this time are returned. This is a string timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 22,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 24,
                        "paramName": "MILESTONE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 25,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 26,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user. Default: *",
                        "paramDefaultValue": ""
                    },{
                        "id": 27,
                        "paramName": "CREATOR",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The user that created the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "MENTIONED",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A user that���s mentioned in the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A list of comma separated label names. Example: bug,ui,@high",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "What to sort results by. Can be either created, updated, comments. Default: created",
                        "paramDefaultValue": ""
                    },{
                        "id": 31,
                        "paramName": "DIRECTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The direction of the sort. Can be either asc or desc. Default: desc",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "SINCE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 10,
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
                    "id": "22",
                    "programName": "edit_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Edit an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 33,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 34,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 35,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "State of the issue. Either open or closed.",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 41,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 25,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 3,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES_ASSIGNEES",
                "description": " Interface to github issues assignees API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "24",
                    "programName": "list_assignees",
                    "programType": "FUNCTION",
                    "programDescription": " List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The list of available assignees",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 42,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 43,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "26",
                    "programName": "check_assignee",
                    "programType": "FUNCTION",
                    "programDescription": " Check assignee. You may also check to see if a particular user is an assignee for a repository.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the assignee is part of repository",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 44,
                        "paramName": "GI                   }],
                    "programLineCounts": {
                    "totalCodeLines": 26,
                    "totalCommentLines": 1,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "124",
                    "programName": "get_readme",
                    "programType": "FUNCTION",
                    "programDescription": " This method returns the preferred README for a repository.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "JSON object of the Readme file",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 238,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 239,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 240,
                        "paramName": "REF",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the commit/branch/tag. Default: the repository���s default branch (usually master)",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 64,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 29,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 12,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_REPOS_FORKS",
                "description": " Interface to github repositories forks API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "126",
                    "programName": "list_forks",
                    "programType": "FUNCTION",
                    "programDescription": " List forks",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 241,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 242,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 243,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The sort order. Can be either newest, oldest, or stargazers. Default: newest",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 65,
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
                    "id": "128",
                    "programName": "create_fork",
                    "programType": "PROCEDURE",
                    "programDescription": " Create a fork. Create a fork for the authenticated user.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 244,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 245,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 246,
                        "paramName": "ORGANIZATION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The organization login. The repository will be forked into this organization.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 66,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 26,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 13,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_REPOS_MERGE",
                "description": " Interface to github repositories merge API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "130",
                    "programName": "repos_merge",
                    "programType": "PROCEDURE",
                    "programDescription": " The Repo Merging API supports merging branches in a repository. This accomplishes essentially the same thing as merging one branch into another in a local repository and then pushing to GitHub. The benefit is that the merge is done on the server side and a local repository is not needed. This makes it more appropriate for automation and other tools where maintaining local repositories would be cumbersome and inefficient. The authenticated user will be the author of any merges done through this endpoint.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 247,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 248,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 249,
                        "paramName": "BASE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the base branch that the head will be merged into.",
                        "paramDefaultValue": ""
                    },{
                        "id": 250,
                        "param Send request to github api",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 8,
                        "paramName": "GITHUB_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account to use as api user",
                        "paramDefaultValue": ""
                    },{
                        "id": 9,
                        "paramName": "API_ENDPOINT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The API endpoint to use",
                        "paramDefaultValue": ""
                    },{
                        "id": 10,
                        "paramName": "ENDPOINT_METHOD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "HTTP method",
                        "paramDefaultValue": ""
                    },{
                        "id": 11,
                        "paramName": "API_DATA",
                        "paramType": "CLOB",
                        "paramDescription": "The data package to the endpoint",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 83,
                    "totalCommentLines": 11,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 2,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES",
                "description": " Interface to github issues API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "16",
                    "programName": "create_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Create an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 12,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 13,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 14,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 15,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 16,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "18",
                    "programName": "get_single_issue",
                    "programType": "FUNCTION",
                    "programDescription": " Get a single issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 19,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 9,
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
                    "id": "20",
                    "programName": "get_repository_issues",
                    "programType": "FUNCTION",
                    "programDescription": " Get issues for a specific repositories",
                    "programAuthor": "Morten Egan",
                    "programReturn": "m since Only issues updated at or after this time are returned. This is a string timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 22,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 24,
                        "paramName": "MILESTONE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 25,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 26,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user. Default: *",
                        "paramDefaultValue": ""
                    },{
                        "id": 27,
                        "paramName": "CREATOR",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The user that created the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "MENTIONED",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A user that���s mentioned in the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A list of comma separated label names. Example: bug,ui,@high",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "What to sort results by. Can be either created, updated, comments. Default: created",
                        "paramDefaultValue": ""
                    },{
                        "id": 31,
                        "paramName": "DIRECTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The direction of the sort. Can be either asc or desc. Default: desc",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "SINCE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 10,
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
                    "id": "22",
                    "programName": "edit_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Edit an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 33,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 34,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 35,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "State of the issue. Either open or closed.",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 41,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 25,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 3,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES_ASSIGNEES",
                "description": " Interface to github issues assignees API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "24",
                    "programName": "list_assignees",
                    "programType": "FUNCTION",
                    "programDescription": " List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The list of available assignees",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 42,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 43,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "26",
                    "programName": "check_assignee",
                    "programType": "FUNCTION",
                    "programDescription": " Check assignee. You may also check to see if a particular user is an assignee for a repository.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the assignee is part of repository",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 44,
                        "paramName"          "paramDefaultValue": ""
                    },{
                        "id": 292,
                        "paramName": "OBJ_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the object created/updated",
                        "paramDefaultValue": ""
                    },{
                        "id": 293,
                        "paramName": "OBJ_DATA",
                        "paramType": "CLOB",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 76,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 64,
                    "totalCommentLines": 5,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "150",
                    "programName": "is_tracked",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a schema is git tracked",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if schema is git tracked, false if not.",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 294,
                        "paramName": "GIT_SCHEMA",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The schema to check",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 77,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 21,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "152",
                    "programName": "repos_exists",
                    "programType": "FUNCTION",
                    "programDescription": " Check if a repository already exists",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if repository exists, false it not.",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 295,
                        "paramName": "REPOSITORY",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 78,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 21,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "154",
                    "programName": "get_oraclegit_env",
                    "programType": "FUNCTION",
                    "programDescription": " Get oraclegit env setting",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The value of requested variable. Null if not set",
                    "programReturnType": "VARCHAR2",
                    "programParameters": [{
                        "id": 296,
                        "paramName": "ENV_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the environment variable",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 79,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 19,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "156",
                    "programName": "add_github_account",
                    "programType": "PROCEDURE",
                    "programDescription": " Add a github account to the OracleGit system",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 297,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the account.",
                        "paramDefaultValue": ""
                    },{
                        "id": 298,
                        "paramName": "GIT_PASSWD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The password for the account.",
                        "paramDefaultValue": ""
                    },{
                        "id": 299,
                        "paramName": "GIT_FULL_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The full name of the user",
                        "paramDefaultValue": ""
                    },{
                        "id": 300,
                        "paramName": "GIT_EMAIL_ADDRESS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The email address of the user.",
                        "paramDefaultValue": ""
                    },{
                        "id": 301,
                        "paramName": "ORGANIZATION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The default organization to use, if any.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 80,
                        "attribName": "Commit",
                        "attribSet": true
                    },{
                        "id": 81,
                        "attribName": "Insert",
                        "attribSet": true
                    },{
                        "id": 82,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 18,
                    "totalCommentLines": 0,
                    "totalDmlLines": 1,
                    "totalTransactionLines": 2
                }
                },{
                    "id": "158",
                    "programName": "add_github_repository",
                    "programType": "PROCEDURE",
                    "programDescription": " Add a repository to OracleGit",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 302,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 303,
                        "paramName": "REPOS_OWNER",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 304,
                   Send request to github api",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 8,
                        "paramName": "GITHUB_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account to use as api user",
                        "paramDefaultValue": ""
                    },{
                        "id": 9,
                        "paramName": "API_ENDPOINT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The API endpoint to use",
                        "paramDefaultValue": ""
                    },{
                        "id": 10,
                        "paramName": "ENDPOINT_METHOD",
                        "paramType": "VARCHAR2",
                        "paramDescription": "HTTP method",
                        "paramDefaultValue": ""
                    },{
                        "id": 11,
                        "paramName": "API_DATA",
                        "paramType": "CLOB",
                        "paramDescription": "The data package to the endpoint",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 7,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 83,
                    "totalCommentLines": 11,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 2,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES",
                "description": " Interface to github issues API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "16",
                    "programName": "create_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Create an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 12,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 13,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 14,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 15,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 16,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 17,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 18,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 8,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "18",
                    "programName": "get_single_issue",
                    "programType": "FUNCTION",
                    "programDescription": " Get a single issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 19,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 20,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 21,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 9,
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
                    "id": "20",
                    "programName": "get_repository_issues",
                    "programType": "FUNCTION",
                    "programDescription": " Get issues for a specific repositories",
                    "programAuthor": "Morten Egan",
                    "programReturn": "m since Only issues updated at or after this time are returned. This is a string timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 22,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 23,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 24,
                        "paramName": "MILESTONE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 25,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    },{
                        "id": 26,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user. Default: *",
                        "paramDefaultValue": ""
                    },{
                        "id": 27,
                        "paramName": "CREATOR",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The user that created the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 28,
                        "paramName": "MENTIONED",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A user that���s mentioned in the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 29,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "A list of comma separated label names. Example: bug,ui,@high",
                        "paramDefaultValue": ""
                    },{
                        "id": 30,
                        "paramName": "SORT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "What to sort results by. Can be either created, updated, comments. Default: created",
                        "paramDefaultValue": ""
                    },{
                        "id": 31,
                        "paramName": "DIRECTION",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The direction of the sort. Can be either asc or desc. Default: desc",
                        "paramDefaultValue": ""
                    },{
                        "id": 32,
                        "paramName": "SINCE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 10,
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
                    "id": "22",
                    "programName": "edit_issue",
                    "programType": "PROCEDURE",
                    "programDescription": " Edit an issue",
                    "programAuthor": "Morten Egan",
                    "programReturn": "",
                    "programReturnType": "",
                    "programParameters": [{
                        "id": 33,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The owner of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 34,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 35,
                        "paramName": "ISSUE_NUMBER",
                        "paramType": "NUMBER",
                        "paramDescription": "ID of the issue to fetch",
                        "paramDefaultValue": ""
                    },{
                        "id": 36,
                        "paramName": "TITLE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The title of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 37,
                        "paramName": "BODY",
                        "paramType": "CLOB",
                        "paramDescription": "The contents of the issue.",
                        "paramDefaultValue": ""
                    },{
                        "id": 38,
                        "paramName": "ASSIGNEE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Login for the user that this issue should be assigned to.",
                        "paramDefaultValue": ""
                    },{
                        "id": 39,
                        "paramName": "STATE",
                        "paramType": "VARCHAR2",
                        "paramDescription": "State of the issue. Either open or closed.",
                        "paramDefaultValue": ""
                    },{
                        "id": 40,
                        "paramName": "MILESTONE",
                        "paramType": "NUMBER",
                        "paramDescription": "Milestone to associate this issue with.",
                        "paramDefaultValue": ""
                    },{
                        "id": 41,
                        "paramName": "LABELS",
                        "paramType": "VARCHAR2",
                        "paramDescription": "Labels to associate with this issue.",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 11,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 25,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                }]
            },{
                "id": 3,
                "packageOwner": "ORACLEGIT",
                "packageName": "GITHUB_ISSUES_ASSIGNEES",
                "description": " Interface to github issues assignees API",
                "project": "OracleGit",
                "author": "Morten Egan",
                "version": "0.1.0",
                "programs": [{
                    "id": "24",
                    "programName": "list_assignees",
                    "programType": "FUNCTION",
                    "programDescription": " List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "The list of available assignees",
                    "programReturnType": "ORACLEGIT.JSON.JSONSTRUCTOBJ",
                    "programParameters": [{
                        "id": 42,
                        "paramName": "GIT_ACCOUNT",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The account that owns the repository",
                        "paramDefaultValue": ""
                    },{
                        "id": 43,
                        "paramName": "REPOS_NAME",
                        "paramType": "VARCHAR2",
                        "paramDescription": "The name of the repository",
                        "paramDefaultValue": ""
                    }],
                    "programAttributes": [{
                        "id": 12,
                        "attribName": "No Instrumentation",
                        "attribSet": true
                    }],
                    "programLineCounts": {
                    "totalCodeLines": 23,
                    "totalCommentLines": 0,
                    "totalDmlLines": 0,
                    "totalTransactionLines": 0
                }
                },{
                    "id": "26",
                    "programName": "check_assignee",
                    "programType": "FUNCTION",
                    "programDescription": " Check assignee. You may also check to see if a particular user is an assignee for a repository.",
                    "programAuthor": "Morten Egan",
                    "programReturn": "True if the assignee is part of repository",
                    "programReturnType": "BOOLEAN",
                    "programParameters": [{
                        "id": 44,
                        "paramName": "GI
