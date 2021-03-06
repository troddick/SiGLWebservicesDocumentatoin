﻿var configuration = {}
configuration.baseurls =
{
    //'services': 'https://sigldev.wim.usgs.gov/SiGLServices',
    //'mapper': 'http://sigldev.wim.usgs.gov/sigl/',
    //'application': 'https://sigldev.wim.usgs.gov/SiGL_DMS'

    'services': 'https://sigl.wim.usgs.gov/SiGLServices',
    'mapper': 'http://sigl.wim.usgs.gov/sigl/',
    'application': 'https://sigl.wim.usgs.gov/SiGL_DMS'    
}

configuration.resources =
    [        
        //#region contact (1) "Contacts";  
        {
            "name": "Contacts",
            "description": "The contact resource represents a contact that can be associated with a project.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/contacts{0}",
                        "description": "This service returns a list of all contacts.",
                        "id": "All Contacts",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts/{1}{0}",
                        "description": "This service returns a contact by it's ID.",
                        "id": "A Contact",
                        "parameters": [
                           { "name": "contactId", "type": "number", "description": "Id of the contact requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/contacts{0}",
                        "description": "This service returns a list of contacts that a project has.",
                        "id": "Project Contacts",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/OrganizationSystems/{1}/contacts{0}",
                        "description": "This service returns a list of contacts at an organization.",
                        "id": "Organization Contacts",
                        "parameters": [
                           { "name": "organizationId", "type": "number", "description": "Id of the organization requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion 
        //#region data_host (2) "DataHosts";
        {
            "name": "Data Host",
            "description": "The DATA HOST resource describes the datasets associated with a PROJECT. It includes: the entity, person, or organization that hosts or holds the dataset; a description of the data format/management system; and the URL of the data (if available online). Each individual data host is associated with a single project.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/datahosts{0}",
                        "description": "This service returns a list of all data hosts.",
                        "id": "All Data Hosts",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datahosts/{1}{0}",
                        "description": "This service returns a data host by it's ID.",
                        "id": "A Data Host",
                        "parameters": [
                           { "name": "dataHostId", "type": "number", "description": "Id of the data host requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/datahosts{0}",
                        "description": "This service returns a list of data hosts for a project.",
                        "id": "Project Data Host",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region data_manager  (3) "DataManagers"; --requires auth (not included
        //#endregion
        //#region division  (4) "Divisions";
        {
            "name": "Division",
            "description": "The DIVISION resource contains the secondary phrase of a organization’s name, such as a division or office (ORGANIZATION name, DIVISION name, SECTION name). A division is associated with a single organization. Multiple organizations/divisions/sections can be assigned to a single project, and multiple projects can share the same organization/division/section.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/divisions{0}",
                        "description": "This service returns a list of all divisions.",
                        "id": "All Divisions",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/divisions/{1}{0}",
                        "description": "This service returns a division by it's ID.",
                        "id": "A Division",
                        "parameters": [
                           { "name": "divisionId", "type": "number", "description": "Id of the division requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region frequency_type  (5) "Frequencies";
        {
            "name": "Frequency Type",
            "description": "The FREQUENCY TYPE resource describes how frequently a SITE was sampled. Multiple frequencies can be assigned to a single site, and multiple sites can share the same frequency type.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/frequencies{0}",
                        "description": "This service returns a list of all frequency types.",
                        "id": "All Frequency Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/frequencies/{1}{0}",
                        "description": "This service returns a frequency type by it's ID.",
                        "id": "A Frequency Type",
                        "parameters": [
                           { "name": "frequencyId", "type": "number", "description": "Id of the frequency type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/frequencies{0}",
                        "description": "This service returns a list of frequency types for a site.",
                        "id": "Site Frequency Types",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region keyword  (6) "Keywords";
        {
            "name": "Keyword",
            "description": "The KEYWORD resource contains data-manager-assigned custom words or phrases that pertain to a PROJECT. Multiple keywords can be assigned to a single project, and multiple projects can share the same keyword.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/keywords{0}",
                        "description": "This service returns a list of all keywords.",
                        "id": "All Keywords",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/keywords/{1}{0}",
                        "description": "This service returns a keyword by it's ID.",
                        "id": "A Keyword",
                        "parameters": [
                           { "name": "keywordId", "type": "number", "description": "Id of the keyword requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/keywords{0}?term={1}",
                        "description": "This service returns a keyword object by it's term.",
                        "id": "Keyword By Term",
                        "parameters": [
                           { "name": "term", "type": "string", "description": "Term to search for.", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/keywords{0}",
                        "description": "This service returns a list of keywords for project.",
                        "id": "Project Keywords",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region lake (7) "Lakes";
        {
            "name": "Lake",
            "description": "The LAKE resource identifies which Great Lake basin a SITE resides in. An individual site can only be assigned to one lake.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/lakes{0}",
                        "description": "This service returns a list of all lakes.",
                        "id": "All Lakes",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/lakes/{1}{0}",
                        "description": "This service returns a lake by it's ID.",
                        "id": "A Lake",
                        "parameters": [
                           { "name": "lakeId", "type": "number", "description": "Id of lake requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/lake{0}",
                        "description": "This service returns the lake that a site is at.",
                        "id": "Site Lake",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region media (8) "Media";
        {
            "name": "Media Type",
            "description": "The MEDIA resource describes what type of media was sampled or analyzed at an individual SITE. Multiple media can be assigned to a single site, and multiple sites can share the same media.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/media{0}",
                        "description": "This service returns a list of media types.",
                        "id": "All Media Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/media/{1}{0}",
                        "description": "This service returns a media type by it's ID.",
                        "id": "A Media Type",
                        "parameters": [
                           { "name": "mediaTypeId", "type": "number", "description": "Id of media type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/media{0}",
                        "description": "This service returns a list of media types for a site.",
                        "id": "Site Media Types",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region objective_type (9) "Objectives";
        {
            "name": "Objective Type",
            "description": "The OBJECTIVE resource contains phrases and terms associated with a PROJECT’s goal or purpose. Multiple objectives can be assigned to a single project, and multiple projects can share the same objective.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/objectives{0}",
                        "description": "This service returns a list of all objective types.",
                        "id": "All Objective Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectives/{1}{0}",
                        "description": "This service returns an objective type by it's ID.",
                        "id": "An Objective Type",
                        "parameters": [
                           { "name": "objectiveId", "type": "number", "description": "Id of objective type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/objectives{0}",
                        "description": "This service returns a list of objective types for a project.",
                        "id": "Project Objective Types",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region organization (10) "Organizations" 
        {
            "name": "Organization",
            "description": "The ORGANIZATION resource contains the first (top-level) phrase of a organization’s name (ORGANIZATION name, DIVISION name, SECTION name). Organizations can exist without divisions or sections. Multiple organizations/divisions/sections can be assigned to a single project, and multiple projects can share the same organization/division/section.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/organizations{0}",
                        "description": "This service returns a list of all organizations.",
                        "id": "All Organizations",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/organizations/{1}{0}",
                        "description": "This service returns an organization by it's ID.",
                        "id": "An Organization",
                        "parameters": [
                           { "name": "organizationId", "type": "number", "description": "Id of the organization requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region organization_system (11) "OrganizationSystems" 
        {
            "name": "Organization System",
            "description": "The ORGANIZATION SYSTEM resource is the group of a single ORGANIZATION / DIVISION / SECTION combination.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/organizationsystems/OrgResources{0}",
                        "description": "This service returns a list of all organization systems.",
                        "id": "All Organization Systems",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/organizationsystems/OrgResources/{1}{0}",
                        "description": "This service returns an organization system by it's ID.",
                        "id": "An Organization System",
                        "parameters": [
                           { "name": "orgSystemId", "type": "number", "description": "Id of the organization system requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/organizationresources{0}",
                        "description": "This service returns a list of organization systems for a project.",
                        "id": "Project Organization Systems",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region parameter (12) "Parameters";
        {
            "name": "Parameter Type",
            "description": "The PARAMETER TYPE resource describes what was sampled at a particular SITE. It includes the parameter group (physical, chemical, biological, microbiological, and toxicological) and the individual parameter name. Each parameter is only associated with one parameter group. Multiple parameters can be assigned to a single site, and multiple sites can share the same parameter.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/parameters{0}",
                        "description": "This service returns a list of all parameter types.",
                        "id": "All Parameter Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/parameters/{1}{0}",
                        "description": "This service returns a parameter type by it's ID.",
                        "id": "A Parameters Type",
                        "parameters": [
                           { "name": "parameterTypeId", "type": "number", "description": "Id of parameter type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/parameters{0}",
                        "description": "This service returns a list of parameter types for a site.",
                        "id": "Site Parameter Types",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/parameters{0}?GroupNames={1}",
                        "description": "This service returns a list of parameter types within the groups specified.",
                        "id": "Parameter Type by Group Name",
                        "parameters": [
                           { "name": "groupNames", "type": "list of strings", "description": "comma serated list of group names (ex: 'Physical,Chemical,Biological'", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region proj_status (13) "ProjectStatus";
        {
            "name": "Project Status",
            "description": "The PROJECT STATUS resource describes whether a PROJECT is active or completed. Only one status can be assigned to an individual project, but multiple projects can share the same status.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/projectstatus{0}",
                        "description": "This service returns a list of all project statuses.",
                        "id": "All Project Statuses",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projectstatus/{1}{0}",
                        "description": "This service returns a project status by it's ID.",
                        "id": "A Project Status",
                        "parameters": [
                           { "name": "projectStatusId", "type": "number", "description": "Id of project status requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/projStatus{0}",
                        "description": "This service returns a project status for a project.",
                        "id": "Project Project Status",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region proj_duration (14) "ProjectDuration";
        {
            "name": "Project Duration",
            "description": "The PROJECT DURATION resource describes the length of a project. Only one duration can be assigned to an individual project, but multiple projects can share the same duration.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/projectduration{0}",
                        "description": "This service returns a list of all project durations.",
                        "id": "All Project Durations",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projectduration/{1}{0}",
                        "description": "This service returns a project duration by it's ID.",
                        "id": "A Project Duration",
                        "parameters": [
                           { "name": "projectDurationId", "type": "number", "description": "Id of project duration requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/projDuration{0}",
                        "description": "This service returns a project duration for a project.",
                        "id": "Project Project Duration",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region project (15) "Projects";
        {
            "name": "Project",
            "description": "The PROJECT resource describes the basic information about a project. It includes: name, start date, end date, project URL (if available), description of the project, additional information (open text field), creation date, and last edited date.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/projects{0}",
                        "description": "This service returns a list of all projects.",
                        "id": "All Projects",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}{0}",
                        "description": "This service returns a project by it's ID.",
                        "id": "A Project",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of project requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/project{0}",
                        "description": "This service returns a project for a site.",
                        "id": "Site Project",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/datahosts/{1}/project{0}",
                        "description": "This service return project for a data host.",
                        "id": "Data Host Project",
                        "parameters": [
                           { "name": "dataHostId", "type": "number", "description": "Id of the data host", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/contacts/{1}/projects{0}",
                        "description": "This service returns a list of projects that this contact has contributed to.",
                        "id": "Contact Projects",
                        "parameters": [
                           { "name": "contactId", "type": "number", "description": "Id of the contact", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/keywords/{1}/projects{0}",
                        "description": "This service returns a list of projects that have this keyword.",
                        "id": "Keyword Projects",
                        "parameters": [
                           { "name": "keywordId", "type": "number", "description": "Id of the keyword", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/publications/{1}/projects{0}",
                        "description": "This service returns a list of projects with this publication.",
                        "id": "Publication Projects",
                        "parameters": [
                           { "name": "publicationId", "type": "number", "description": "Id of the publication", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/objectives/{1}/projects{0}",
                        "description": "This service returns a list of projects with this objective type.",
                        "id": "Objective Type Projects",
                        "parameters": [
                           { "name": "objectiveTypeId", "type": "number", "description": "Id of the objective type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/frequencies/{1}/projects{0}",
                        "description": "This service returns a list of projects where any of the project's sites has this frequency type.",
                        "id": "Frequency Type Projects",
                        "parameters": [
                           { "name": "frequencyTypeId", "type": "number", "description": "Id of the frequency type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/lakes/{1}/projects{0}",
                        "description": "This service returns a list of projects where any of the project's sites has this lake.",
                        "id": "Lake Projects",
                        "parameters": [
                           { "name": "lakeId", "type": "number", "description": "Id of the lake", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/media/{1}/projects{0}",
                        "description": "This service returns a list of projects where any of the project's sites has this media type.",
                        "id": "Media Projects",
                        "parameters": [
                           { "name": "mediaTypeId", "type": "number", "description": "Id of the media type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/parameters/{1}/projects{0}",
                        "description": "This service returns a list of projects where any of the project's sites has this parameter type.",
                        "id": "Parameter Projects",
                        "parameters": [
                           { "name": "parameterTypeId", "type": "number", "description": "Id of the parameter type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/resourcetypes/{1}/projects{0}",
                        "description": "This service returns a list of projects where any of the project's sites has this resource type.",
                        "id": "Resource Projects",
                        "parameters": [
                           { "name": "resourceTypeId", "type": "number", "description": "Id of the resource type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/status/{1}/projects{0}",
                        "description": "This service returns a list of projects where any of the project's sites has this status type.",
                        "id": "Site Status Projects",
                        "parameters": [
                           { "name": "statusId", "type": "number", "description": "Id of the status type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/organizationsystems/{1}/projects{0}",
                        "description": "This service returns a list of projects with this organization.",
                        "id": "Organization System Projects",
                        "parameters": [
                           { "name": "orgSystemId", "type": "number", "description": "Id of the organization system", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projectduration/{1}/projects{0}",
                        "description": "This service returns a list of projects with this duration.",
                        "id": "Project Duration Projects",
                        "parameters": [
                           { "name": "projDurationId", "type": "number", "description": "Id of the project duration", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projectstatus/{1}/projects{0}",
                        "description": "This service returns a list of projects with this status.",
                        "id": "Project Status Projects",
                        "parameters": [
                           { "name": "projStatusId", "type": "number", "description": "Id of the project status", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects{0}?FlaggedProjects={1}",
                        "description": "This service returns a list of projects that are either flagged or not flagged (ready to show on the sigl public map) based on the boolean passed in.",
                        "id": "Flagged Projects",
                        "parameters": [
                           { "name": "flagValue", "type": "number", "description": "Value of 1 will returned flagged projects, 0 will return unflagged projects", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/withsitecount{0}",
                        "description": "This service returns a custom project list that contains the count of how many sites each project has and the data manager's name.",
                        "id": "Projects With SiteCount",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/GetFullProject{0}?ByScienceBase={1}&ByProject={2}",
                        "description": "This service returns a custom project object (containing the project as well as project objectives, keywords, data hosts, organizations, contacts, and publications) by the science base id or by a project id.",
                        "id": "Full Project",
                        "parameters": [
                           { "name": "scienceBaseId", "type": "string", "description": "science base id if this project is from science base", "optional": true, "value": "" },
                           { "name": "projectId", "type": "number", "description": "Id of the project", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region publication (16) "Publications";
        {
            "name": "Publication",
            "description": "The PUBLICATION resource describes the publications associated with a PROJECT. It includes the publication title, description, and online publication URL (if one exists). Each individual publication is associated with a single project.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/publications{0}",
                        "description": "This service returns a list of all publications.",
                        "id": "All Publications",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/publications/{1}{0}",
                        "description": "This service returns a publication by it's ID.",
                        "id": "A Publications",
                        "parameters": [
                           { "name": "publicationId", "type": "number", "description": "Id of the publications requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/projects/{1}/publications{0}",
                        "description": "This service return a list of publications for a project.",
                        "id": "Project Publications",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region resource_type (17) "ResourceTypes";
        {
            "name": "Resource Type",
            "description": "The RESOURCE TYPE resource describes where samples were taken at an individual SITE. Multiple resource types can be assigned to a single site, and multiple sites can share the same resource type.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/resourcetypes{0}",
                        "description": "This service returns a list of all resource types.",
                        "id": "All Resource Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/resourcetypes/{1}{0}",
                        "description": "This service returns a resource type by it's ID.",
                        "id": "A Resource Type",
                        "parameters": [
                           { "name": "resourceTypeId", "type": "number", "description": "Id of resource type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/resourcetypes{0}",
                        "description": "This service returns a list of resource types for a site.",
                        "id": "Site Resource Types",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region role (18) "Roles";
        {
            "name": "Role",
            "description": "The ROLE resource describes the type of access an individual Data Manager has within the SiGL DMS.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/roles{0}",
                        "description": "This service returns a list of roles.",
                        "id": "All Roles",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/roles/{1}{0}",
                        "description": "This service returns a role by it's ID.",
                        "id": "A Role",
                        "parameters": [
                           { "name": "roleId", "type": "number", "description": "Id of role requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                    
                ]
            }]
        },
        //#endregion
        //#region section (19) "Sections";
        {
            "name": "Section",
            "description": "The SECTION resource contains the tertiary phrase of a organization’s name, such as a division or office (ORGANIZATION name, DIVISION name, SECTION name). A section is associated with a single organization/division combination. Multiple organizations/divisions/sections can be assigned to a single project, and multiple projects can share the same organization/division/section.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/sections{0}",
                        "description": "This service returns a list of all sections.",
                        "id": "All Sections",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sections/{1}{0}",
                        "description": "This service returns a section by it's ID.",
                        "id": "A Section",
                        "parameters": [
                           { "name": "sectionId", "type": "number", "description": "Id of the section requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
        //#region site (20) "Sites";
        {
            "name": "Site",
            "description": "The SITE resource describes the basic information about a site. It includes: name, description, latitude, longitude, country, state, latitude, longitude, site description, waterbody, HUC8, sampling start date, sampling end date, sampling platform, site URL (if available), and additional information (open text field). Each individual site can only be associated with a single project, but projects can be associated with multiple sites.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/sites{0}",
                        "description": "This service returns a list of sites.",
                        "id": "All Sites",
                        "parameters": [],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/sites/{1}{0}",
                        "description": "This service returns a site by it's ID.",
                        "id": "A Site",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of site requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/sites/{1}/GetFullSite{0}",
                        "description": "This service returns a custom site object that contains the site as well as it's resources, media, frequencies, and parameters.",
                        "id": "Full Site",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/projects/{1}/sites{0}",
                        "description": "This service returns a list of sites for a project.",
                        "id": "Project Sites",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/projects/{1}/ProjectFullSites{0}",
                        "description": "This service returns a list of custom site objects that contains the site as well as it's resources, media, frequencies, and parameters.",
                        "id": "Project Full Sites",
                        "parameters": [
                           { "name": "projectId", "type": "number", "description": "Id of the project", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/lakes/{1}/sites{0}",
                        "description": "This service returns a list of sites at this lake.",
                        "id": "Lake Sites",
                        "parameters": [
                           { "name": "lakeId", "type": "number", "description": "Id of the lake", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/status/{1}/sites{0}",
                        "description": "This service returns a list of sites with this status.",
                        "id": "Status Sites",
                        "parameters": [
                           { "name": "statusId", "type": "number", "description": "Id of the status", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/media/{1}/sites{0}",
                        "description": "This service returns a list of sites with this media.",
                        "id": "Media Sites",
                        "parameters": [
                           { "name": "mediaId", "type": "number", "description": "Id of the media type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/resourcetypes/{1}/sites{0}",
                        "description": "This service returns a list of sites with this resource type.",
                        "id": "Resource Sites",
                        "parameters": [
                           { "name": "resourceId", "type": "number", "description": "Id of the resource type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/parameters/{1}/sites{0}",
                        "description": "This service returns a list of sites with this parameter type.",
                        "id": "Parameter Sites",
                        "parameters": [
                           { "name": "parameterId", "type": "number", "description": "Id of the parameter type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/frequencies/{1}/sites{0}",
                        "description": "This service returns a list of sites with this frequency type.",
                        "id": "Frequency Sites",
                        "parameters": [
                           { "name": "frequencyId", "type": "number", "description": "Id of the frequency type", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    },
                    {
                        "uri": "/sites/FilteredSites{0}?Duration={1}&Lake={2}&Media={3}&ProjObjs={4}&ProjOrg={5}&Parameters={6}&ResComp={7}&State={8}&Status={9}",
                        "description": "This service returns a list of sites that meet the passed-in values.",
                        "id": "Filtered Sites",
                        "parameters": [
                           { "name": "durationIDs", "type": "comma separated numbers", "description": "comma separated list of project duration IDs (ex: 1,2,3)", "optional": true, "value": "" },
                           { "name": "lakeIDs", "type": "comma separated numbers", "description": "comma separated list of lake IDs", "optional": true, "value": "" },
                           { "name": "mediaIDs", "type": "comma separated numbers", "description": "comma separated list of media type IDs", "optional": true, "value": "" },
                           { "name": "objIDs", "type": "comma separated numbers", "description": "comma separated list of objective type IDs", "optional": true, "value": "" },
                           { "name": "orgID", "type": "number", "description": "organization ID that created the project that this site belongs to", "optional": true, "value": "" },
                           { "name": "parameterIDs", "type": "comma separated numbers", "description": "comma separated list of parameter type IDs", "optional": true, "value": "" },
                           { "name": "resCompIDs", "type": "comma separated numbers", "description": "comma separated list of resource type IDs", "optional": true, "value": "" },
                           { "name": "states", "type": "comma separated strings", "description": "comma separated list of state names (ex: 'Michigan,Wisconsin')", "optional": true, "value": "" },
                           { "name": "statusIDs", "type": "comma separated numbers", "description": "comma separated list of project status IDs", "optional": true, "value": "" }
                        ],
                        "availableMedia": [".xml", ".json", ".geojson"],
                        "selectedMedia": ".json",
                        "showMap": true
                    }
                ]
            }]
        },
        //#endregion
        //#region status (21) "Status";
        {
            "name": "Site Status",
            "description": "The SITE STATUS resource describes whether a SITE is currently being sampled (active) or not (inactive). A site can only have one status.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/status{0}",
                        "description": "This service returns a list of all status types.",
                        "id": "All Status Types",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/status/{1}{0}",
                        "description": "This service returns a status type by it's ID.",
                        "id": "A Status Type",
                        "parameters": [
                           { "name": "statusTypeId", "type": "number", "description": "Id of status type requested", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    },
                    {
                        "uri": "/sites/{1}/status{0}",
                        "description": "This service returns the status type for a site.",
                        "id": "Site Status Type",
                        "parameters": [
                           { "name": "siteId", "type": "number", "description": "Id of the site", "value": "" }
                        ],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
          //#region site_states (21) "strings";
        {
            "name": "Site States",
            "description": "The SITE STATES resource identifies which state or province a SITE resides in. An individual site can only be assigned to one state. Only states and provinces within the Great Lakes basin are available.",
            "methods": [{
                "type": "GET",
                "uriList": [
                    {
                        "uri": "/sites/StatesWithSites{0}",
                        "description": "This service returns a list of all state names where sites exist.",
                        "id": "All Site States",
                        "parameters": [],
                        "availableMedia": [".xml", ".json"],
                        "selectedMedia": ".json"
                    }
                ]
            }]
        },
        //#endregion
  
    ]
configuration.basemaps =
{
    national: {
        name: "National Geographic",
        type: "agsBase",
        layer: "NationalGeographic",
        visible: true
    },
    streets: {
        name: "Streets",
        type: "agsBase",
        layer: "Streets",
        visible: false
    }
}// end baselayer
configuration.overlayedLayers = {
  
}//end overlayedLayers
configuration.regions = [
    { "RegionID": "AL", "Name": "Alabama", "Bounds": [[30.189622, -88.47203], [35.00888, -84.893486]] },
    { "RegionID": "AK", "Name": "Alaska", "Bounds": [[51, -179], [72, -140]] },
    { "RegionID": "AS", "Name": "American Samoa", "Bounds": [[-14.375555, -170.82611], [-14.166389, -169.438323]] },
    { "RegionID": "AZ", "Name": "Arizona", "Bounds": [[31.329174, -114.815414], [37.004585, -109.044883]] },
    { "RegionID": "AR", "Name": "Arkansas", "Bounds": [[33.004528, -94.618156], [36.499656, -89.644409]] },
    { "RegionID": "CA", "Name": "California", "Bounds": [[32.530426, -124.411186], [42.009826, -114.129486]] },
    { "RegionID": "CO", "Name": "Colorado", "Bounds": [[36.992225, -109.060806], [41.005611, -102.041984]] },
    { "RegionID": "CT", "Name": "Connecticut", "Bounds": [[40.982486, -73.729721], [42.049732, -71.788238]] },
    { "RegionID": "DE", "Name": "Delaware", "Bounds": [[38.449325, -75.788055], [39.840576, -75.042396]] },
    { "RegionID": "DC", "Name": "District of Columbia", "Bounds": [[38.801475, -77.120506], [38.995063, -76.909698]] },
    { "RegionID": "FL", "Name": "Florida", "Bounds": [[24.518321, -87.637229], [31.002105, -80.029022]] },
    { "RegionID": "GA", "Name": "Georgia", "Bounds": [[30.35713, -85.605514], [35.002037, -80.841957]] },
    { "RegionID": "GU", "Name": "Guam", "Bounds": [[13.234996, 144.634155], [13.65361, 144.953308]] },
    { "RegionID": "HA", "Name": "Hawaii", "Bounds": [[18.915493, -160.236068], [22.234394, -154.798583]] },
    { "RegionID": "ID", "Name": "Idaho", "Bounds": [[41.989837, -117.240196], [49.001522, -111.043617]] },
    { "RegionID": "IL", "Name": "Illinois", "Bounds": [[36.971115, -91.512626], [42.509479, -87.018081]] },
    { "RegionID": "IN", "Name": "Indiana", "Bounds": [[37.773048, -88.089744], [41.762321, -84.787673]] },
    { "RegionID": "IA", "Name": "Iowa", "Bounds": [[40.374542, -96.635665], [43.504646, -90.139312]] },
    { "RegionID": "KS", "Name": "Kansas", "Bounds": [[36.992221, -102.048553], [40.004512, -94.592735]] },
    { "RegionID": "KY", "Name": "Kentucky", "Bounds": [[36.496719, -89.573677], [39.147232, -81.964202]] },
    { "RegionID": "LA", "Name": "Louisiana", "Bounds": [[28.918104, -94.045776], [33.020599, -88.814056]] },
    { "RegionID": "ME", "Name": "Maine", "Bounds": [[43.064773, -71.082], [47.461883, -66.954002]] },
    { "RegionID": "MD", "Name": "Maryland", "Bounds": [[37.911422, -79.487152], [39.724014, -75.045898]] },
    { "RegionID": "MA", "Name": "Massachusetts", "Bounds": [[41.237003, -73.508407], [42.886661, -69.925399]] },
    { "RegionID": "MI", "Name": "Michigan", "Bounds": [[41.6958, -90.418708], [48.304248, -82.122901]] },
    { "RegionID": "MN", "Name": "Minnesota", "Bounds": [[43.502101, -97.238975], [49.38562, -89.487754]] },
    { "RegionID": "MS", "Name": "Mississippi", "Bounds": [[30.174402, -91.654251], [34.998321, -88.097961]] },
    { "RegionID": "MO", "Name": "Missouri", "Bounds": [[35.99509, -95.774414], [40.614028, -89.100593]] },
    { "RegionID": "MT", "Name": "Montana", "Bounds": [[44.357688, -116.050735], [49.001808, -104.03971]] },
    { "RegionID": "NE", "Name": "Nebraska", "Bounds": [[39.999885, -104.052841], [43.002796, -95.307998]] },
    { "RegionID": "NV", "Name": "Nevada", "Bounds": [[35.002079, -120.005348], [42.000312, -114.039344]] },
    { "RegionID": "NH", "Name": "New Hampshire", "Bounds": [[42.697776, -72.556434], [45.308731, -70.7135]] },
    { "RegionID": "NJ", "Name": "New Jersey", "Bounds": [[38.92564, -75.567596], [41.357639, -73.89363]] },
    { "RegionID": "NM", "Name": "New Mexico", "Bounds": [[31.331899, -109.050102], [36.999423, -103.000656]] },
    { "RegionID": "NY", "Name": "New York", "Bounds": [[40.499076, -79.763328], [45.017364, -71.85588]] },
    { "RegionID": "NC", "Name": "North Carolina", "Bounds": [[33.844467, -84.320968], [36.589008, -75.459503]] },
    { "RegionID": "ND", "Name": "North Dakota", "Bounds": [[45.93505, -104.049591], [49.001316, -96.555152]] },
    { "RegionID": "MP", "Name": "Northern Mariana Islands", "Bounds": [[14.105276, 144.89859], [20.556385, 145.870788]] },
    { "RegionID": "OH", "Name": "Ohio", "Bounds": [[38.4025, -84.819931], [42.324424, -80.51387]] },
    { "RegionID": "OK", "Name": "Oklahoma", "Bounds": [[33.615253, -103.000869], [37.00093, -94.430702]] },
    { "RegionID": "OR", "Name": "Oregon", "Bounds": [[41.992462, -124.566024], [46.285762, -116.461639]] },
    { "RegionID": "PA", "Name": "Pennsylvania", "Bounds": [[39.719429, -80.519561], [42.510452, -74.690032]] },
    { "RegionID": "PR", "Name": "Puerto Rico", "Bounds": [[17.922222, -67.938339], [18.519443, -65.241958]] },
    { "RegionID": "RI", "Name": "Rhode Island", "Bounds": [[41.144325, -71.888366], [42.0191, -71.120613]] },
    { "RegionID": "SC", "Name": "South Carolina", "Bounds": [[32.049209, -83.354354], [35.21611, -78.55368]] },
    { "RegionID": "SD", "Name": "South Dakota", "Bounds": [[42.481113, -104.057128], [45.944362, -96.436576]] },
    { "RegionID": "TN", "Name": "Tennessee", "Bounds": [[34.983898, -90.310745], [36.679244, -81.647453]] },
    { "RegionID": "TX", "Name": "Texas", "Bounds": [[25.83802, -106.645782], [36.50344, -93.508743]] },
    { "RegionID": "UT", "Name": "Utah", "Bounds": [[36.99863, -114.054069], [42.004196, -109.040946]] },
    { "RegionID": "VT", "Name": "Vermont", "Bounds": [[42.727611, -73.443428], [45.016334, -71.467712]] },
    { "RegionID": "VA", "Name": "Virginia", "Bounds": [[36.539142, -83.674819], [39.466579, -75.240722]] },
    { "RegionID": "VI", "Name": "Virgin Islands", "Bounds": [[17.676666, -65.026947], [18.377777, -64.560287]] },
    { "RegionID": "WA", "Name": "Washington", "Bounds": [[45.553112, -124.75579], [49.00362, -116.912506]] },
    { "RegionID": "WV", "Name": "West Virginia", "Bounds": [[37.202762, -82.640777], [40.638553, -77.719734]] },
    { "RegionID": "WI", "Name": "Wisconsin", "Bounds": [[42.494701, -92.885391], [47.302532, -86.249565]] },
    { "RegionID": "WY", "Name": "Wyoming", "Bounds": [[40.996269, -111.055137], [45.004203, -104.051986]] },
    { "RegionID": "CRB", "Name": "Connecticut River Basin", "Bounds": [[43, -70.5], [44, -74.5]] },
    { "RegionID": "DRB", "Name": "Delaware River Basin", "Bounds": [[38.5, -73], [42.5, -77]] },
    { "RegionID": "RRB", "Name": "Rainy River Basin", "Bounds": [[47.3, -89.5], [50, -96]] }

]//end regions