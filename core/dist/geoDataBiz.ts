/**
 * @description 添加边界
 * @summary Request data types
 * @url [ post ] /api/Boundaries
 * @bizName geoDataBiz
 */
export type PostBoundariesReqTypeByGds = {
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    layerId?: string;
    data?: Record<string, any>;
};

/**
 * @description 添加边界
 * @summary Response data types
 * @url [ post ] /api/Boundaries
 * @bizName geoDataBiz
 */
export type PostBoundariesResTypeByGds = {
    id: string;
    productId: string;
    mapType: 0 | 1 | 2;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: Array<string>;
    defaultLayerEffectConfig: string;
    layerEffectConfigs: Array<string>;
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    pitchAngle: number;
    rotationAngle: number;
    center: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        address: string;
        zoom: number;
    };
    isEnableMapCenter: boolean;
    viewBox: {
        leftBottomView: {
            longitude: number;
            latitude: number;
        };
        rightUpView: {
            longitude: number;
            latitude: number;
        };
    };
    useFakeMapSdk: boolean;
    lowViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    maxiMinZoom: {
        minZoom: number;
        maxZoom: number;
    };
    mapMaskEffect: {
        isShow: boolean;
        opacity: number;
    };
    areaBoundaryEffectConfig: {
        isShow: boolean;
        isCustomize: boolean;
        lowViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        middleViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        highViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        customViewDistrict: {
            minZoom: number;
            maxZoom: number;
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
    };
};

/**
 * @description 修改边界
 * @summary Request data types
 * @url [ put ] /api/Boundaries/{id}
 * @bizName geoDataBiz
 */
export type PutBoundariesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    layerId?: string;
    data?: Record<string, any>;
};

/**
 * @description 删除边界
 * @summary Request data types
 * @url [ delete ] /api/Boundaries/{id}
 * @bizName geoDataBiz
 */
export type DeleteBoundariesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据id查询边界数据
 * @summary Request data types
 * @url [ get ] /api/Boundaries/{id}
 * @bizName geoDataBiz
 */
export type GetBoundariesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据id查询边界数据
 * @summary Response data types
 * @url [ get ] /api/Boundaries/{id}
 * @bizName geoDataBiz
 */
export type GetBoundariesIdResTypeByGds = {
    id: string;
    resourceId: string;
    name: string;
    layerId: string;
    data: string;
};

/**
 * @description 多条件查询边界数据
 * @summary Request data types
 * @url [ post ] /api/Boundaries/condition_query
 * @bizName geoDataBiz
 */
export type PostBoundariesConditionQueryReqTypeByGds = {
    'X-version'?: string;
    keyWord?: string;
    layerIds?: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 多条件查询边界数据
 * @summary Response data types
 * @url [ post ] /api/Boundaries/condition_query
 * @bizName geoDataBiz
 */
export type PostBoundariesConditionQueryResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        name: string;
        layerId: string;
        data: string;
    }>;
};

/**
 * @description 添加坐标系
 * @summary Request data types
 * @url [ post ] /api/Coordinates
 * @bizName geoDataBiz
 */
export type PostCoordinatesReqTypeByGds = {
    'X-version'?: string;
    id?: string;
    name?: string;
};

/**
 * @description 添加坐标系
 * @summary Response data types
 * @url [ post ] /api/Coordinates
 * @bizName geoDataBiz
 */
export type PostCoordinatesResTypeByGds = {
    id: string;
    name: string;
};

/**
 * @description 获取坐标系集合
 * @summary Request data types
 * @url [ get ] /api/Coordinates
 * @bizName geoDataBiz
 */
export type GetCoordinatesReqTypeByGds = {
    'X-version'?: string;
};

/**
 * @description 获取坐标系集合
 * @summary Response data types
 * @url [ get ] /api/Coordinates
 * @bizName geoDataBiz
 */
export type GetCoordinatesResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
    }>;
};

/**
 * @description 删除坐标系
 * @summary Request data types
 * @url [ delete ] /api/Coordinates/{id}
 * @bizName geoDataBiz
 */
export type DeleteCoordinatesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定人的有权限行政区域
 * @summary Request data types
 * @url [ get ] /api/Districts
 * @bizName geoDataBiz
 */
export type GetDistrictsReqTypeByGds = {
    userId?: string;
    'X-version'?: string;
};

/**
 * @description 获取指定人的有权限行政区域
 * @summary Response data types
 * @url [ get ] /api/Districts
 * @bizName geoDataBiz
 */
export type GetDistrictsResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 创建行政区域
 * @summary Request data types
 * @url [ post ] /api/Districts
 * @bizName geoDataBiz
 */
export type PostDistrictsReqTypeByGds = {
    'X-version'?: string;
    name?: string;
    englishName?: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    areaCode?: string;
    geoFilePath?: string;
    type?: 0 | 1 | 2;
};

/**
 * @description 创建行政区域
 * @summary Response data types
 * @url [ post ] /api/Districts
 * @bizName geoDataBiz
 */
export type PostDistrictsResTypeByGds = {
    resourceId: string;
    englishName: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    areaCode: string;
    parentId: string;
    parentPath: string;
    parentIdPath: string;
    parentNamePath: string;
    geoFilePath: string;
    platformId: string;
    order: number;
    type: 0 | 1 | 2;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
    id: string;
    name: string;
};

/**
 * @description 根据 Id 获取行政区域
 * @summary Request data types
 * @url [ get ] /api/Districts/{id}
 * @bizName geoDataBiz
 */
export type GetDistrictsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据 Id 获取行政区域
 * @summary Response data types
 * @url [ get ] /api/Districts/{id}
 * @bizName geoDataBiz
 */
export type GetDistrictsIdResTypeByGds = {
    resourceId: string;
    englishName: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    areaCode: string;
    parentId: string;
    parentPath: string;
    parentIdPath: string;
    parentNamePath: string;
    geoFilePath: string;
    platformId: string;
    order: number;
    type: 0 | 1 | 2;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
    id: string;
    name: string;
};

/**
 * @description 修改行政区域信息
 * @summary Request data types
 * @url [ put ] /api/Districts/{id}
 * @bizName geoDataBiz
 */
export type PutDistrictsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    name?: string;
    englishName?: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    areaCode?: string;
    geoFilePath?: string;
    type?: 0 | 1 | 2;
};

/**
 * @description 删除行政区域
 * @summary Request data types
 * @url [ delete ] /api/Districts/{id}
 * @bizName geoDataBiz
 */
export type DeleteDistrictsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据Id集合或者行政区域码集合获取行政区域列表
 * @summary Request data types
 * @url [ post ] /api/Districts/ids
 * @bizName geoDataBiz
 */
export type PostDistrictsIdsReqTypeByGds = {
    'X-version'?: string;
    ids?: Array<string>;
};

/**
 * @description 根据Id集合或者行政区域码集合获取行政区域列表
 * @summary Response data types
 * @url [ post ] /api/Districts/ids
 * @bizName geoDataBiz
 */
export type PostDistrictsIdsResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 导入行政区域数据接口
 * @summary Request data types
 * @url [ post ] /api/Districts/import
 * @bizName geoDataBiz
 */
export type PostDistrictsImportReqTypeByGds = {
    'X-version'?: string;
    isReload?: boolean;
    districtItems?: Array<{
        id: string;
        name: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        geoFilePath: string;
        order: number;
        type: 0 | 1 | 2;
    }>;
};

/**
 * @description 根据父级行政区域 Id 获取子行政区域
 * @summary Request data types
 * @url [ get ] /api/Districts/{parentId}/children
 * @bizName geoDataBiz
 */
export type GetDistrictsParentIdChildrenReqTypeByGds = {
    parentId: string;
    'X-version'?: string;
};

/**
 * @description 根据父级行政区域 Id 获取子行政区域
 * @summary Response data types
 * @url [ get ] /api/Districts/{parentId}/children
 * @bizName geoDataBiz
 */
export type GetDistrictsParentIdChildrenResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 创建子行政区域
 * @summary Request data types
 * @url [ post ] /api/Districts/{parentId}/children
 * @bizName geoDataBiz
 */
export type PostDistrictsParentIdChildrenReqTypeByGds = {
    parentId: string;
    'X-version'?: string;
    name?: string;
    englishName?: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    areaCode?: string;
    geoFilePath?: string;
    type?: 0 | 1 | 2;
};

/**
 * @description 创建子行政区域
 * @summary Response data types
 * @url [ post ] /api/Districts/{parentId}/children
 * @bizName geoDataBiz
 */
export type PostDistrictsParentIdChildrenResTypeByGds = {
    resourceId: string;
    englishName: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    areaCode: string;
    parentId: string;
    parentPath: string;
    parentIdPath: string;
    parentNamePath: string;
    geoFilePath: string;
    platformId: string;
    order: number;
    type: 0 | 1 | 2;
    idPath: string;
    namePath: string;
    isLeaf: boolean;
    id: string;
    name: string;
};

/**
 * @description 根据行政区域 Id 获取所有父级区域
 * @summary Request data types
 * @url [ get ] /api/Districts/{id}/parents
 * @bizName geoDataBiz
 */
export type GetDistrictsIdParentsReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据行政区域 Id 获取所有父级区域
 * @summary Response data types
 * @url [ get ] /api/Districts/{id}/parents
 * @bizName geoDataBiz
 */
export type GetDistrictsIdParentsResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取指定行政区域树
 * @summary Request data types
 * @url [ get ] /api/Districts/{id}/tree
 * @bizName geoDataBiz
 */
export type GetDistrictsIdTreeReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取指定行政区域树
 * @summary Response data types
 * @url [ get ] /api/Districts/{id}/tree
 * @bizName geoDataBiz
 */
export type GetDistrictsIdTreeResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 根据名字集合获取行政区域列表
 * @summary Request data types
 * @url [ post ] /api/Districts/names
 * @bizName geoDataBiz
 */
export type PostDistrictsNamesReqTypeByGds = {
    Names?: Array<string>;
    'X-version'?: string;
};

/**
 * @description 根据名字集合获取行政区域列表
 * @summary Response data types
 * @url [ post ] /api/Districts/names
 * @bizName geoDataBiz
 */
export type PostDistrictsNamesResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 聚合子行政区域为父级行政区域
 * @summary Request data types
 * @url [ post ] /api/Districts/children/mergence
 * @bizName geoDataBiz
 */
export type PostDistrictsChildrenMergenceReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 聚合子行政区域为父级行政区域
 * @summary Response data types
 * @url [ post ] /api/Districts/children/mergence
 * @bizName geoDataBiz
 */
export type PostDistrictsChildrenMergenceResTypeByGds = {
    totalCount: number;
    records: Array<{
        coordinate: {
            longitude: number;
            latitude: number;
        };
        englishName: string;
        areaCode: string;
        createTime: string;
        order: number;
        platformId: string;
        type: 0 | 1 | 2;
        geoFilePath: string;
        parentPath: string;
        resourceId: string;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 查询子行政区域(父级id不传默认查询自身权限下根节点)
 * @summary Request data types
 * @url [ post ] /api/Districts/children
 * @bizName geoDataBiz
 */
export type PostDistrictsChildrenReqTypeByGds = {
    'X-version'?: string;
    parentId?: string;
    selectedIds?: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 查询子行政区域(父级id不传默认查询自身权限下根节点)
 * @summary Response data types
 * @url [ post ] /api/Districts/children
 * @bizName geoDataBiz
 */
export type PostDistrictsChildrenResTypeByGds = {
    totalCount: number;
    records: Array<{
        useStatus: 0 | 1 | 2;
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 批量查询行政区域下级接口（包含子孙级行政区域）
 * @summary Request data types
 * @url [ post ] /api/Districts/subordinates
 * @bizName geoDataBiz
 */
export type PostDistrictsSubordinatesReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 批量查询行政区域下级接口（包含子孙级行政区域）
 * @summary Response data types
 * @url [ post ] /api/Districts/subordinates
 * @bizName geoDataBiz
 */
export type PostDistrictsSubordinatesResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 根据条件分析获取对应行政区域
 * @summary Request data types
 * @url [ post ] /api/Districts/analysis
 * @bizName geoDataBiz
 */
export type PostDistrictsAnalysisReqTypeByGds = {
    'X-version'?: string;
    address?: string;
    coordinate?: {
        longitude: number;
        latitude: number;
    };
    useDefaultUserDistrict?: boolean;
    isVerifyPermission?: boolean;
};

/**
 * @description 根据条件分析获取对应行政区域
 * @summary Response data types
 * @url [ post ] /api/Districts/analysis
 * @bizName geoDataBiz
 */
export type PostDistrictsAnalysisResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
};

/**
 * @description 通过经纬度分析地址
 * @summary Request data types
 * @url [ get ] /api/Districts/analysis/address
 * @bizName geoDataBiz
 */
export type GetDistrictsAnalysisAddressReqTypeByGds = {
    'coordinate.Longitude'?: number;
    'coordinate.Latitude'?: number;
    'X-version'?: string;
};

/**
 * @description 通过经纬度分析地址
 * @summary Response data types
 * @url [ get ] /api/Districts/analysis/address
 * @bizName geoDataBiz
 */
export type GetDistrictsAnalysisAddressResTypeByGds = {
    districts: Array<{
        resourceId: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        parentPath: string;
        parentIdPath: string;
        parentNamePath: string;
        geoFilePath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
        idPath: string;
        namePath: string;
        isLeaf: boolean;
        id: string;
        name: string;
    }>;
    address: string;
};

/**
 * @description 导出行政区域
 * @summary Request data types
 * @url [ post ] /api/Districts/export
 * @bizName geoDataBiz
 */
export type PostDistrictsExportReqTypeByGds = {
    'X-version'?: string;
    ids?: Array<string>;
    type?: 0 | 1 | 2;
};

/**
 * @description 导出行政区域
 * @summary Response data types
 * @url [ post ] /api/Districts/export
 * @bizName geoDataBiz
 */
export type PostDistrictsExportResTypeByGds = {
    districts: Array<{
        id: string;
        resourceId: string;
        name: string;
        englishName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        areaCode: string;
        parentId: string;
        geoFilePath: string;
        createdTime: string;
        parentPath: string;
        platformId: string;
        order: number;
        type: 0 | 1 | 2;
    }>;
};

/**
 * @description 获取设施图层
 * @summary Request data types
 * @url [ get ] /api/Facilities/layers
 * @bizName geoDataBiz
 */
export type GetFacilitiesLayersReqTypeByGds = {
    'X-version'?: string;
};

/**
 * @description 获取设施图层
 * @summary Response data types
 * @url [ get ] /api/Facilities/layers
 * @bizName geoDataBiz
 */
export type GetFacilitiesLayersResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 导入设施图层
 * @summary Request data types
 * @url [ post ] /api/Facilities/layers/import
 * @bizName geoDataBiz
 */
export type PostFacilitiesLayersImportReqTypeByGds = {
    'X-version'?: string;
    isReload?: boolean;
    groupItems?: Array<{
        groupName: string;
        groupKey: string;
        children: Array<{
            id: string;
            number: string;
            name: string;
            description: string;
            iconUrl: string;
            productId: string;
            order: number;
        }>;
    }>;
};

/**
 * @description 导入设施
 * @summary Request data types
 * @url [ post ] /api/Facilities/import
 * @bizName geoDataBiz
 */
export type PostFacilitiesImportReqTypeByGds = {
    'X-version'?: string;
    isReload?: boolean;
    facilityItems?: Array<{
        name: string;
        resourceId: string;
        groupName: string;
        layerName: string;
        productId: string;
        longitude: number;
        latitude: number;
        owner: string;
        number: string;
        description: string;
        address: string;
        geoFilePath: string;
        extension: Record<string, any>;
        areaCode: string;
        createTime: string;
        order: number;
        platformId: string;
        height: number;
        geometryData: {
            type: string;
            properties: Record<string, any>;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        facilityState: string;
    }>;
};

/**
 * @description 导入物资
 * @summary Request data types
 * @url [ post ] /api/Facilities/goods/import
 * @bizName geoDataBiz
 */
export type PostFacilitiesGoodsImportReqTypeByGds = {
    'X-version'?: string;
    goodItems?: Array<{
        name: string;
        resourceId: string;
        longitude: number;
        latitude: number;
        description: string;
        organization: string;
        owner: string;
        number: string;
        amount: number;
        unit: string;
        subType: string;
        mainType: string;
        entryTime: string;
        facilityId: string;
    }>;
};

/**
 * @description 获取详情
 * @summary Request data types
 * @url [ get ] /api/Facilities/{id}
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取详情
 * @summary Response data types
 * @url [ get ] /api/Facilities/{id}
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdResTypeByGds = {
    medias: Array<string>;
    goodMainTypes: Array<{
        name: string;
        total: number;
    }>;
    labelDetail: Array<{
        id: string;
        title: string;
        color: string;
        createdTime: string;
        modifyTime: string;
        resourceId: string;
        description: string;
    }>;
    layerDetail: {
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    };
    resourceId: string;
    layerId: string;
    description: string;
    owner: string;
    number: string;
    geoFilePath: string;
    address: string;
    extension: Record<string, any>;
    areaCode: string;
    platformId: string;
    createTime: string;
    order: number;
    state: number;
    height: number;
    geometryData: {
        type: string;
        properties: Record<string, any>;
        geometry: {
            coordinates: Array<any>;
            type: string;
        };
    };
    facilityState: string;
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * @description 获取设施关联的物资信息(一般为仓库)
 * @summary Request data types
 * @url [ get ] /api/Facilities/{id}/goods
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdGoodsReqTypeByGds = {
    id: string;
    Keyword?: string;
    GoodsSubType?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取设施关联的物资信息(一般为仓库)
 * @summary Response data types
 * @url [ get ] /api/Facilities/{id}/goods
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdGoodsResTypeByGds = {
    totalCount: number;
    records: Array<{
        resourceId: string;
        description: string;
        organization: string;
        owner: string;
        number: string;
        amount: number;
        unit: string;
        subType: string;
        mainType: string;
        entryTime: string;
        platformId: string;
        areaCode: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 获取设施关联的物资类型
 * @summary Request data types
 * @url [ get ] /api/Facilities/{id}/goods_types
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdGoodsTypesReqTypeByGds = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取设施关联的物资类型
 * @summary Response data types
 * @url [ get ] /api/Facilities/{id}/goods_types
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdGoodsTypesResTypeByGds = {
    totalCount: number;
    records: Array<{
        name: string;
        total: number;
    }>;
};

/**
 * @description 获取设施关联的物资名称
 * @summary Request data types
 * @url [ get ] /api/Facilities/{id}/goods_names
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdGoodsNamesReqTypeByGds = {
    id: string;
    SubType?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 获取设施关联的物资名称
 * @summary Response data types
 * @url [ get ] /api/Facilities/{id}/goods_names
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdGoodsNamesResTypeByGds = {
    totalCount: number;
    records: Array<{
        name: string;
        total: number;
    }>;
};

/**
 * @description 区域查询资源
 * @summary Request data types
 * @url [ post ] /api/Facilities/area_query
 * @bizName geoDataBiz
 */
export type PostFacilitiesAreaQueryReqTypeByGds = {
    'X-version'?: string;
    upLeft: {
        longitude: number;
        latitude: number;
    };
    bottomRight: {
        longitude: number;
        latitude: number;
    };
    layerIds: Array<string>;
    points?: Array<{
        longitude: number;
        latitude: number;
    }>;
    setFilterType?: 0 | 1;
    keyword?: string;
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 区域查询资源
 * @summary Response data types
 * @url [ post ] /api/Facilities/area_query
 * @bizName geoDataBiz
 */
export type PostFacilitiesAreaQueryResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerDetail: {
            id: string;
            name: string;
            number: string;
            description: string;
            iconUrl: string;
            group: string;
            groupKey: string;
            productId: string;
        };
        resourceId: string;
        layerId: string;
        description: string;
        owner: string;
        number: string;
        geoFilePath: string;
        address: string;
        extension: Record<string, any>;
        areaCode: string;
        platformId: string;
        createTime: string;
        order: number;
        state: number;
        height: number;
        geometryData: {
            type: string;
            properties: Record<string, any>;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        facilityState: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 圆形区域设施查询
 * @summary Request data types
 * @url [ post ] /api/Facilities/circle_area
 * @bizName geoDataBiz
 */
export type PostFacilitiesCircleAreaReqTypeByGds = {
    'X-version'?: string;
    layerIds: Array<string>;
    keyword?: string;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
    sortRule?: 0 | 1;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 圆形区域设施查询
 * @summary Response data types
 * @url [ post ] /api/Facilities/circle_area
 * @bizName geoDataBiz
 */
export type PostFacilitiesCircleAreaResTypeByGds = {
    totalCount: number;
    records: Array<{
        distance: number;
        layerDetail: {
            id: string;
            name: string;
            number: string;
            description: string;
            iconUrl: string;
            group: string;
            groupKey: string;
            productId: string;
        };
        resourceId: string;
        layerId: string;
        description: string;
        owner: string;
        number: string;
        geoFilePath: string;
        address: string;
        extension: Record<string, any>;
        areaCode: string;
        platformId: string;
        createTime: string;
        order: number;
        state: number;
        height: number;
        geometryData: {
            type: string;
            properties: Record<string, any>;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        facilityState: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 搜索资源
 * @summary Request data types
 * @url [ post ] /api/Facilities/search
 * @bizName geoDataBiz
 */
export type PostFacilitiesSearchReqTypeByGds = {
    'X-version'?: string;
    keyword: string;
    maxCount?: number;
    layerIds: Array<string>;
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 搜索资源
 * @summary Response data types
 * @url [ post ] /api/Facilities/search
 * @bizName geoDataBiz
 */
export type PostFacilitiesSearchResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerDetail: {
            id: string;
            name: string;
            number: string;
            description: string;
            iconUrl: string;
            group: string;
            groupKey: string;
            productId: string;
        };
        resourceId: string;
        layerId: string;
        description: string;
        owner: string;
        number: string;
        geoFilePath: string;
        address: string;
        extension: Record<string, any>;
        areaCode: string;
        platformId: string;
        createTime: string;
        order: number;
        state: number;
        height: number;
        geometryData: {
            type: string;
            properties: Record<string, any>;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        facilityState: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 生成静态资源
 * @summary Request data types
 * @url [ post ] /api/Facilities/statics/generate
 * @bizName geoDataBiz
 */
export type PostFacilitiesStaticsGenerateReqTypeByGds = {
    'X-version'?: string;
};

/**
 * @description 获取静态资源文件名
 * @summary Request data types
 * @url [ post ] /api/Facilities/statics/files
 * @bizName geoDataBiz
 */
export type PostFacilitiesStaticsFilesReqTypeByGds = {
    'X-version'?: string;
};

/**
 * @description 获取静态资源文件名
 * @summary Response data types
 * @url [ post ] /api/Facilities/statics/files
 * @bizName geoDataBiz
 */
export type PostFacilitiesStaticsFilesResTypeByGds = {
    totalCount: number;
    records: Array<string>;
};

/**
 * @description 导入设施监控组
 * @summary Request data types
 * @url [ post ] /api/Facilities/camera_groups/import
 * @bizName geoDataBiz
 */
export type PostFacilitiesCameraGroupsImportReqTypeByGds = {
    'X-version'?: string;
    facilityCameraGroupItems?: Array<{
        facilityResourceId: string;
        cameraGroupIds: Array<string>;
    }>;
};

/**
 * @description 获取设施监控组
 * @summary Request data types
 * @url [ get ] /api/Facilities/{id}/camera_groups
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdCameraGroupsReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 获取设施监控组
 * @summary Response data types
 * @url [ get ] /api/Facilities/{id}/camera_groups
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdCameraGroupsResTypeByGds = {
    facilityId: string;
    cameraGroupIds: Array<string>;
    platformId: string;
    resourceId: string;
};

/**
 * @description 物资搜索（用于前端模糊搜索）
 * @summary Request data types
 * @url [ post ] /api/Facilities/goods/search
 * @bizName geoDataBiz
 */
export type PostFacilitiesGoodsSearchReqTypeByGds = {
    'X-version'?: string;
    upLeft: {
        longitude: number;
        latitude: number;
    };
    bottomRight: {
        longitude: number;
        latitude: number;
    };
    keyword?: string;
    goodsSubType?: string;
    maxCount?: number;
};

/**
 * @description 物资搜索（用于前端模糊搜索）
 * @summary Response data types
 * @url [ post ] /api/Facilities/goods/search
 * @bizName geoDataBiz
 */
export type PostFacilitiesGoodsSearchResTypeByGds = {
    totalCount: number;
    records: Array<{
        facility: {
            id: string;
            name: string;
            address: string;
            description: string;
        };
        resourceId: string;
        description: string;
        organization: string;
        owner: string;
        number: string;
        amount: number;
        unit: string;
        subType: string;
        mainType: string;
        entryTime: string;
        platformId: string;
        areaCode: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 多条件查询设施信息
 * @summary Request data types
 * @url [ post ] /api/Facilities/condition_query
 * @bizName geoDataBiz
 */
export type PostFacilitiesConditionQueryReqTypeByGds = {
    'X-version'?: string;
    keyWord?: string;
    layerIds?: Array<string>;
    layerName?: string;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
    querySubordinateFacility: boolean;
    resourceIds?: Array<string>;
    isDesc?: boolean;
    pageIndex?: number;
    pageSize?: number;
};

/**
 * @description 多条件查询设施信息
 * @summary Response data types
 * @url [ post ] /api/Facilities/condition_query
 * @bizName geoDataBiz
 */
export type PostFacilitiesConditionQueryResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerDetail: {
            id: string;
            name: string;
            number: string;
            description: string;
            iconUrl: string;
            group: string;
            groupKey: string;
            productId: string;
        };
        resourceId: string;
        layerId: string;
        description: string;
        owner: string;
        number: string;
        geoFilePath: string;
        address: string;
        extension: Record<string, any>;
        areaCode: string;
        platformId: string;
        createTime: string;
        order: number;
        state: number;
        height: number;
        geometryData: {
            type: string;
            properties: Record<string, any>;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        facilityState: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 更改设施标签
 * @summary Request data types
 * @url [ put ] /api/Facilities/{id}/labels
 * @bizName geoDataBiz
 */
export type PutFacilitiesIdLabelsReqTypeByGds = {
    id: string;
    'X-version'?: string;
    resourceIds?: Array<string>;
};

/**
 * @description 更新设施状态(能源设备状态)
 * @summary Request data types
 * @url [ put ] /api/Facilities/{id}/state
 * @bizName geoDataBiz
 */
export type PutFacilitiesIdStateReqTypeByGds = {
    id: string;
    'X-version'?: string;
    state: 0 | 1;
};

/**
 * @description 根据Id或resourceId批量删除设施
 * @summary Request data types
 * @url [ delete ] /api/Facilities
 * @bizName geoDataBiz
 */
export type DeleteFacilitiesReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 根据设施id或resourceId获取设施模型场景
 * @summary Request data types
 * @url [ get ] /api/Facilities/{id}/scenes
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdScenesReqTypeByGds = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 根据设施id或resourceId获取设施模型场景
 * @summary Response data types
 * @url [ get ] /api/Facilities/{id}/scenes
 * @bizName geoDataBiz
 */
export type GetFacilitiesIdScenesResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        facilityId: string;
        areaCode: string;
        name: string;
        sceneName: string;
        isIndoorScene: boolean;
        showModelList: Array<string>;
        cameraOption: {
            center: Array<number>;
            bearing: number;
            pitch: number;
            zoom: number;
        };
    }>;
};

/**
 * @description 根据设施id集合批量获取设施信息
 * @summary Request data types
 * @url [ post ] /api/Facilities/batch
 * @bizName geoDataBiz
 */
export type PostFacilitiesBatchReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 根据设施id集合批量获取设施信息
 * @summary Response data types
 * @url [ post ] /api/Facilities/batch
 * @bizName geoDataBiz
 */
export type PostFacilitiesBatchResTypeByGds = {
    totalCount: number;
    records: Array<{
        medias: Array<string>;
        goodMainTypes: Array<{
            name: string;
            total: number;
        }>;
        labelDetail: Array<{
            id: string;
            title: string;
            color: string;
            createdTime: string;
            modifyTime: string;
            resourceId: string;
            description: string;
        }>;
        layerDetail: {
            id: string;
            name: string;
            number: string;
            description: string;
            iconUrl: string;
            group: string;
            groupKey: string;
            productId: string;
        };
        resourceId: string;
        layerId: string;
        description: string;
        owner: string;
        number: string;
        geoFilePath: string;
        address: string;
        extension: Record<string, any>;
        areaCode: string;
        platformId: string;
        createTime: string;
        order: number;
        state: number;
        height: number;
        geometryData: {
            type: string;
            properties: Record<string, any>;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        facilityState: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 根据 productId 查询设施集合
 * @summary Request data types
 * @url [ get ] /api/Facilities/{productId}/query
 * @bizName geoDataBiz
 */
export type GetFacilitiesProductIdQueryReqTypeByGds = {
    productId: string;
    IsDesc?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 根据 productId 查询设施集合
 * @summary Response data types
 * @url [ get ] /api/Facilities/{productId}/query
 * @bizName geoDataBiz
 */
export type GetFacilitiesProductIdQueryResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerDetail: {
            id: string;
            name: string;
            number: string;
            description: string;
            iconUrl: string;
            group: string;
            groupKey: string;
            productId: string;
        };
        resourceId: string;
        layerId: string;
        description: string;
        owner: string;
        number: string;
        geoFilePath: string;
        address: string;
        extension: Record<string, any>;
        areaCode: string;
        platformId: string;
        createTime: string;
        order: number;
        state: number;
        height: number;
        geometryData: {
            type: string;
            properties: Record<string, any>;
            geometry: {
                coordinates: Array<any>;
                type: string;
            };
        };
        facilityState: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 根据id查询地图配置
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs/{id}
 * @bizName geoDataBiz
 */
export type GetGeoConfigsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据id查询地图配置
 * @summary Response data types
 * @url [ get ] /api/GeoConfigs/{id}
 * @bizName geoDataBiz
 */
export type GetGeoConfigsIdResTypeByGds = {
    id: string;
    productId: string;
    mapType: 0 | 1 | 2;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: Array<string>;
    defaultLayerEffectConfig: string;
    layerEffectConfigs: Array<string>;
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    pitchAngle: number;
    rotationAngle: number;
    center: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        address: string;
        zoom: number;
    };
    isEnableMapCenter: boolean;
    viewBox: {
        leftBottomView: {
            longitude: number;
            latitude: number;
        };
        rightUpView: {
            longitude: number;
            latitude: number;
        };
    };
    useFakeMapSdk: boolean;
    lowViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    maxiMinZoom: {
        minZoom: number;
        maxZoom: number;
    };
    mapMaskEffect: {
        isShow: boolean;
        opacity: number;
    };
    areaBoundaryEffectConfig: {
        isShow: boolean;
        isCustomize: boolean;
        lowViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        middleViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        highViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        customViewDistrict: {
            minZoom: number;
            maxZoom: number;
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
    };
};

/**
 * @description 修改地图配置
 * @summary Request data types
 * @url [ put ] /api/GeoConfigs/{id}
 * @bizName geoDataBiz
 */
export type PutGeoConfigsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    productId?: string;
    mapType?: 0 | 1 | 2;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: Array<string>;
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: Array<string>;
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    pitchAngle?: number;
    rotationAngle?: number;
    center?: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        address: string;
        zoom: number;
    };
    isEnableMapCenter?: boolean;
    viewBox?: {
        leftBottomView: {
            longitude: number;
            latitude: number;
        };
        rightUpView: {
            longitude: number;
            latitude: number;
        };
    };
    useFakeMapSdk?: boolean;
    lowViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    mapMaskEffect?: {
        isShow: boolean;
        opacity: number;
    };
    areaBoundaryEffectConfig?: {
        isShow: boolean;
        isCustomize: boolean;
        lowViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        middleViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        highViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        customViewDistrict: {
            minZoom: number;
            maxZoom: number;
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
    };
};

/**
 * @description 条件查询地图配置
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs
 * @bizName geoDataBiz
 */
export type GetGeoConfigsReqTypeByGds = {
    productId: string;
    'X-version'?: string;
};

/**
 * @description 条件查询地图配置
 * @summary Response data types
 * @url [ get ] /api/GeoConfigs
 * @bizName geoDataBiz
 */
export type GetGeoConfigsResTypeByGds = {
    id: string;
    productId: string;
    mapType: 0 | 1 | 2;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: Array<string>;
    defaultLayerEffectConfig: string;
    layerEffectConfigs: Array<string>;
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    pitchAngle: number;
    rotationAngle: number;
    center: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        address: string;
        zoom: number;
    };
    isEnableMapCenter: boolean;
    viewBox: {
        leftBottomView: {
            longitude: number;
            latitude: number;
        };
        rightUpView: {
            longitude: number;
            latitude: number;
        };
    };
    useFakeMapSdk: boolean;
    lowViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    maxiMinZoom: {
        minZoom: number;
        maxZoom: number;
    };
    mapMaskEffect: {
        isShow: boolean;
        opacity: number;
    };
    areaBoundaryEffectConfig: {
        isShow: boolean;
        isCustomize: boolean;
        lowViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        middleViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        highViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        customViewDistrict: {
            minZoom: number;
            maxZoom: number;
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
    };
};

/**
 * @description 添加地图配置
 * @summary Request data types
 * @url [ post ] /api/GeoConfigs
 * @bizName geoDataBiz
 */
export type PostGeoConfigsReqTypeByGds = {
    'X-version'?: string;
    productId?: string;
    mapType?: 0 | 1 | 2;
    mapSourceType?: string;
    defaultMapServerType?: string;
    mapServerTypes?: Array<string>;
    defaultLayerEffectConfig?: string;
    layerEffectConfigs?: Array<string>;
    clusterStyle?: string;
    minPitch?: number;
    maxPitch?: number;
    pitchAngle?: number;
    rotationAngle?: number;
    center?: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        address: string;
        zoom: number;
    };
    isEnableMapCenter?: boolean;
    viewBox?: {
        leftBottomView: {
            longitude: number;
            latitude: number;
        };
        rightUpView: {
            longitude: number;
            latitude: number;
        };
    };
    useFakeMapSdk?: boolean;
    lowViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    mapMaskEffect?: {
        isShow: boolean;
        opacity: number;
    };
    areaBoundaryEffectConfig?: {
        isShow: boolean;
        isCustomize: boolean;
        lowViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        middleViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        highViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        customViewDistrict: {
            minZoom: number;
            maxZoom: number;
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
    };
};

/**
 * @description 添加地图配置
 * @summary Response data types
 * @url [ post ] /api/GeoConfigs
 * @bizName geoDataBiz
 */
export type PostGeoConfigsResTypeByGds = {
    id: string;
    productId: string;
    mapType: 0 | 1 | 2;
    mapSourceType: string;
    defaultMapServerType: string;
    mapServerTypes: Array<string>;
    defaultLayerEffectConfig: string;
    layerEffectConfigs: Array<string>;
    clusterStyle: string;
    minPitch: number;
    maxPitch: number;
    pitchAngle: number;
    rotationAngle: number;
    center: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        address: string;
        zoom: number;
    };
    isEnableMapCenter: boolean;
    viewBox: {
        leftBottomView: {
            longitude: number;
            latitude: number;
        };
        rightUpView: {
            longitude: number;
            latitude: number;
        };
    };
    useFakeMapSdk: boolean;
    lowViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    maxiMinZoom: {
        minZoom: number;
        maxZoom: number;
    };
    mapMaskEffect: {
        isShow: boolean;
        opacity: number;
    };
    areaBoundaryEffectConfig: {
        isShow: boolean;
        isCustomize: boolean;
        lowViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        middleViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        highViewDistrict: {
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
        customViewDistrict: {
            minZoom: number;
            maxZoom: number;
            line: boolean;
            polygon: boolean;
            highlightPolygon: boolean;
        };
    };
};

/**
 * @description 根据产品Id获取地图默认配置（基础配置、图层配置、效果配置）
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs/{productId}/mapConfig
 * @bizName geoDataBiz
 */
export type GetGeoConfigsProductIdMapConfigReqTypeByGds = {
    productId: string;
    'X-version'?: string;
};

/**
 * @description 根据产品Id获取地图默认配置（基础配置、图层配置、效果配置）
 * @summary Response data types
 * @url [ get ] /api/GeoConfigs/{productId}/mapConfig
 * @bizName geoDataBiz
 */
export type GetGeoConfigsProductIdMapConfigResTypeByGds = {
    geoConfig: {
        id: string;
        productId: string;
        mapType: 0 | 1 | 2;
        mapSourceType: string;
        defaultMapServerType: string;
        mapServerTypes: Array<string>;
        defaultLayerEffectConfig: string;
        layerEffectConfigs: Array<string>;
        clusterStyle: string;
        minPitch: number;
        maxPitch: number;
        pitchAngle: number;
        rotationAngle: number;
        center: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            address: string;
            zoom: number;
        };
        isEnableMapCenter: boolean;
        viewBox: {
            leftBottomView: {
                longitude: number;
                latitude: number;
            };
            rightUpView: {
                longitude: number;
                latitude: number;
            };
        };
        useFakeMapSdk: boolean;
        lowViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        middleViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        highViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        maxiMinZoom: {
            minZoom: number;
            maxZoom: number;
        };
        mapMaskEffect: {
            isShow: boolean;
            opacity: number;
        };
        areaBoundaryEffectConfig: {
            isShow: boolean;
            isCustomize: boolean;
            lowViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            middleViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            highViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            customViewDistrict: {
                minZoom: number;
                maxZoom: number;
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
        };
    };
    geoEffectConfigs: Array<{
        id: string;
        productId: string;
        mapType: 0 | 1 | 2;
        isShowEffect: boolean;
        antiAlias: boolean;
        needBloom: boolean;
        lowViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        middleViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        highViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        maxiMinZoom: {
            minZoom: number;
            maxZoom: number;
        };
        lowViewPointEffect: {
            showDistrictBoundary: boolean;
            isShow3DTiles: boolean;
            tiltPhotography: {
                maxDistance: number;
                opacity: number;
                sateliteProvideType: string;
                baseUrl: string;
                projectionType: string;
                maxZoom: number;
                viewBox: {
                    leftBottomView: {
                        longitude: number;
                        latitude: number;
                    };
                    rightUpView: {
                        longitude: number;
                        latitude: number;
                    };
                };
            };
            showBuilding: boolean;
            showRoad: boolean;
            showTerrin: boolean;
            showWater: boolean;
            showModels: boolean;
            showIndoorModels: boolean;
        };
        middleViewPointEffect: {
            showDistrictBoundary: boolean;
            isShow3DTiles: boolean;
            tiltPhotography: {
                maxDistance: number;
                opacity: number;
                sateliteProvideType: string;
                baseUrl: string;
                projectionType: string;
                maxZoom: number;
                viewBox: {
                    leftBottomView: {
                        longitude: number;
                        latitude: number;
                    };
                    rightUpView: {
                        longitude: number;
                        latitude: number;
                    };
                };
            };
            showBuilding: boolean;
            showRoad: boolean;
            showTerrin: boolean;
            showWater: boolean;
            showModels: boolean;
            showIndoorModels: boolean;
        };
        highViewPointEffect: {
            showDistrictBoundary: boolean;
            isShow3DTiles: boolean;
            tiltPhotography: {
                maxDistance: number;
                opacity: number;
                sateliteProvideType: string;
                baseUrl: string;
                projectionType: string;
                maxZoom: number;
                viewBox: {
                    leftBottomView: {
                        longitude: number;
                        latitude: number;
                    };
                    rightUpView: {
                        longitude: number;
                        latitude: number;
                    };
                };
            };
            showBuilding: boolean;
            showRoad: boolean;
            showTerrin: boolean;
            showWater: boolean;
            showModels: boolean;
            showIndoorModels: boolean;
        };
    }>;
    layerConfigs: Array<{
        id: string;
        productId: string;
        name: string;
        path: string;
        parentId: string;
        group: string;
        groupKey: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        layerIconBackground: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        pointIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        clusterIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        isChecked: boolean;
        isShow: boolean;
        isShowLabel: boolean;
        isShowAlert: boolean;
        hasChildren: boolean;
        zoom: {
            type: number;
            defaultZoom: {
                lowViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                middleViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                highViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
            };
            customZoom: {
                minZoom: number;
                maxZoom: number;
            };
        };
        lowViewPointCluster: {
            selectType: number;
            value: string;
        };
        middleViewPointCluster: {
            selectType: number;
            value: string;
        };
        highViewPointCluster: {
            selectType: number;
            value: string;
        };
        customViewPointCluster: {
            selectType: number;
            value: string;
        };
        layerType: string;
        lineConfig: {
            color: string;
            opacity: number;
            width: number;
            isUseDataHeight: boolean;
            height: number;
            isDynamic: boolean;
            dynamicStyleUrl: string;
            dynamicSpeed: number;
            clampToGround: boolean;
            duration: number;
            lineType: string;
            dashLength: Array<number>;
            pattern: string;
            gapWidth: number;
            offset: number;
            blur: number;
            gradient: string;
            material: {
                polyLineGlowMaterialProperty: {
                    color: string;
                    glowPower: number;
                    taperPower: number;
                };
                polyLineOutlineMaterialProperty: {
                    color: string;
                    outlineColor: string;
                    outlineWidth: number;
                };
            };
            extension: Record<string, any>;
        };
        polygonConfig: {
            color: string;
            opacity: number;
            boundaryConfig: {
                isDisplay: boolean;
                color: string;
                width: number;
                opacity: number;
            };
            isUseDataHeight: boolean;
            height: number;
            extrusionHeight: number;
            fill: boolean;
            outline: boolean;
            outlineWidth: number;
            outlineColor: string;
            outlineColorOpacity: number;
            outlineHeight: number;
            colorFieldName: number;
            clampToGround: boolean;
            filterFieldName: string;
            filterFieldValue: string;
            fillImageUrl: string;
            antialias: boolean;
            pattern: string;
            translate: Array<number>;
            material: {
                colorMaterialProperty: {
                    color: string;
                };
                imageMaterialProperty: {
                    image: string;
                    color: string;
                    repeat: string;
                    transparent: boolean;
                };
                checkerboardMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: string;
                };
                stripeMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: number;
                    offset: number;
                    orientation: string;
                };
                gridMaterialProperty: {
                    color: string;
                    cellAlpha: number;
                    lineCount: string;
                    lineThickness: string;
                    lineOffset: string;
                };
            };
        };
        areaConfig: {
            fill: boolean;
            fillColor: string;
            fillColorOpacity: number;
            extrudedHeight: number;
            clampToGround: boolean;
            lineColor: string;
            lineColorOpacity: number;
            isShowLine: boolean;
            lineWidth: number;
        };
        barConfig: {
            color: string;
            colorOpacity: number;
            clampToGround: boolean;
            radius: number;
            barHeight: number;
            entityHeight: number;
            isShowText: boolean;
            textConfig: {
                color: string;
                font: string;
                isShowBackground: boolean;
                background: string;
                backgroundOpacity: number;
                isShowLine: boolean;
                lineColor: string;
                lineWidth: number;
                scale: number;
            };
        };
        signageConfig: {
            image: boolean;
            color: string;
            opacity: boolean;
        };
    }>;
};

/**
 * @description 根据条件获取地图效果配置列表
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs/effect
 * @bizName geoDataBiz
 */
export type GetGeoConfigsEffectReqTypeByGds = {
    productId?: string;
    mapType?: number;
    'X-version'?: string;
};

/**
 * @description 创建地图效果配置
 * @summary Request data types
 * @url [ post ] /api/GeoConfigs/effect
 * @bizName geoDataBiz
 */
export type PostGeoConfigsEffectReqTypeByGds = {
    'X-version'?: string;
    productId: string;
    mapType: 0 | 1 | 2;
    isShowEffect?: boolean;
    antiAlias?: boolean;
    needBloom?: boolean;
    lowViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    lowViewPointEffect?: {
        showDistrictBoundary: boolean;
        isShow3DTiles: boolean;
        tiltPhotography: {
            maxDistance: number;
            opacity: number;
            sateliteProvideType: string;
            baseUrl: string;
            projectionType: string;
            maxZoom: number;
            viewBox: {
                leftBottomView: {
                    longitude: number;
                    latitude: number;
                };
                rightUpView: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
        showBuilding: boolean;
        showRoad: boolean;
        showTerrin: boolean;
        showWater: boolean;
        showModels: boolean;
        showIndoorModels: boolean;
    };
    middleViewPointEffect?: {
        showDistrictBoundary: boolean;
        isShow3DTiles: boolean;
        tiltPhotography: {
            maxDistance: number;
            opacity: number;
            sateliteProvideType: string;
            baseUrl: string;
            projectionType: string;
            maxZoom: number;
            viewBox: {
                leftBottomView: {
                    longitude: number;
                    latitude: number;
                };
                rightUpView: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
        showBuilding: boolean;
        showRoad: boolean;
        showTerrin: boolean;
        showWater: boolean;
        showModels: boolean;
        showIndoorModels: boolean;
    };
    highViewPointEffect?: {
        showDistrictBoundary: boolean;
        isShow3DTiles: boolean;
        tiltPhotography: {
            maxDistance: number;
            opacity: number;
            sateliteProvideType: string;
            baseUrl: string;
            projectionType: string;
            maxZoom: number;
            viewBox: {
                leftBottomView: {
                    longitude: number;
                    latitude: number;
                };
                rightUpView: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
        showBuilding: boolean;
        showRoad: boolean;
        showTerrin: boolean;
        showWater: boolean;
        showModels: boolean;
        showIndoorModels: boolean;
    };
};

/**
 * @description 修改地图效果配置
 * @summary Request data types
 * @url [ put ] /api/GeoConfigs/effect
 * @bizName geoDataBiz
 */
export type PutGeoConfigsEffectReqTypeByGds = {
    'X-version'?: string;
    productId: string;
    mapType: 0 | 1 | 2;
    isShowEffect?: boolean;
    antiAlias?: boolean;
    needBloom?: boolean;
    lowViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    middleViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    highViewPoint?: {
        zoom: {
            minZoom: number;
            maxZoom: number;
        };
        defaultZoom: number;
        defaultPitch: number;
    };
    lowViewPointEffect?: {
        showDistrictBoundary: boolean;
        isShow3DTiles: boolean;
        tiltPhotography: {
            maxDistance: number;
            opacity: number;
            sateliteProvideType: string;
            baseUrl: string;
            projectionType: string;
            maxZoom: number;
            viewBox: {
                leftBottomView: {
                    longitude: number;
                    latitude: number;
                };
                rightUpView: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
        showBuilding: boolean;
        showRoad: boolean;
        showTerrin: boolean;
        showWater: boolean;
        showModels: boolean;
        showIndoorModels: boolean;
    };
    middleViewPointEffect?: {
        showDistrictBoundary: boolean;
        isShow3DTiles: boolean;
        tiltPhotography: {
            maxDistance: number;
            opacity: number;
            sateliteProvideType: string;
            baseUrl: string;
            projectionType: string;
            maxZoom: number;
            viewBox: {
                leftBottomView: {
                    longitude: number;
                    latitude: number;
                };
                rightUpView: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
        showBuilding: boolean;
        showRoad: boolean;
        showTerrin: boolean;
        showWater: boolean;
        showModels: boolean;
        showIndoorModels: boolean;
    };
    highViewPointEffect?: {
        showDistrictBoundary: boolean;
        isShow3DTiles: boolean;
        tiltPhotography: {
            maxDistance: number;
            opacity: number;
            sateliteProvideType: string;
            baseUrl: string;
            projectionType: string;
            maxZoom: number;
            viewBox: {
                leftBottomView: {
                    longitude: number;
                    latitude: number;
                };
                rightUpView: {
                    longitude: number;
                    latitude: number;
                };
            };
        };
        showBuilding: boolean;
        showRoad: boolean;
        showTerrin: boolean;
        showWater: boolean;
        showModels: boolean;
        showIndoorModels: boolean;
    };
};

/**
 * @description 添加地图图层配置
 * @summary Request data types
 * @url [ post ] /api/GeoConfigs/layer
 * @bizName geoDataBiz
 */
export type PostGeoConfigsLayerReqTypeByGds = {
    'X-version'?: string;
    productId?: string;
    mapType?: 0 | 1 | 2;
    name?: string;
    path?: string;
    layerIcon?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    layerIconBackground?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    pointIcon?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    clusterIcon?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: {
        type: number;
        defaultZoom: Array<Record<string, any>>;
        customZoom: {
            minZoom: number;
            maxZoom: number;
        };
    };
    lowViewPointCluster?: {
        selectType: number;
        value: string;
    };
    middleViewPointCluster?: {
        selectType: number;
        value: string;
    };
    highViewPointCluster?: {
        selectType: number;
        value: string;
    };
    customViewPointCluster?: {
        selectType: number;
        value: string;
    };
    layerType?: string;
    lineConfig?: {
        color: string;
        opacity: number;
        width: number;
        isUseDataHeight: boolean;
        height: number;
        isDynamic: boolean;
        dynamicStyleUrl: string;
        dynamicSpeed: number;
        clampToGround: boolean;
        duration: number;
        lineType: string;
        dashLength: Array<number>;
        pattern: string;
        gapWidth: number;
        offset: number;
        blur: number;
        gradient: string;
        material: {
            polyLineGlowMaterialProperty: {
                color: string;
                glowPower: number;
                taperPower: number;
            };
            polyLineOutlineMaterialProperty: {
                color: string;
                outlineColor: string;
                outlineWidth: number;
            };
        };
        extension: Record<string, any>;
    };
    polygonConfig?: {
        color: string;
        opacity: number;
        boundaryConfig: {
            isDisplay: boolean;
            color: string;
            width: number;
            opacity: number;
        };
        isUseDataHeight: boolean;
        height: number;
        extrusionHeight: number;
        fill: boolean;
        outline: boolean;
        outlineWidth: number;
        outlineColor: string;
        outlineColorOpacity: number;
        outlineHeight: number;
        colorFieldName: number;
        clampToGround: boolean;
        filterFieldName: string;
        filterFieldValue: string;
        fillImageUrl: string;
        antialias: boolean;
        pattern: string;
        translate: Array<number>;
        material: {
            colorMaterialProperty: {
                color: string;
            };
            imageMaterialProperty: {
                image: string;
                color: string;
                repeat: string;
                transparent: boolean;
            };
            checkerboardMaterialProperty: {
                evenColor: string;
                oddColor: string;
                repeat: string;
            };
            stripeMaterialProperty: {
                evenColor: string;
                oddColor: string;
                repeat: number;
                offset: number;
                orientation: string;
            };
            gridMaterialProperty: {
                color: string;
                cellAlpha: number;
                lineCount: string;
                lineThickness: string;
                lineOffset: string;
            };
        };
    };
    areaConfig?: {
        fill: boolean;
        fillColor: string;
        fillColorOpacity: number;
        extrudedHeight: number;
        clampToGround: boolean;
        lineColor: string;
        lineColorOpacity: number;
        isShowLine: boolean;
        lineWidth: number;
    };
    barConfig?: {
        color: string;
        colorOpacity: number;
        clampToGround: boolean;
        radius: number;
        barHeight: number;
        entityHeight: number;
        isShowText: boolean;
        textConfig: {
            color: string;
            font: string;
            isShowBackground: boolean;
            background: string;
            backgroundOpacity: number;
            isShowLine: boolean;
            lineColor: string;
            lineWidth: number;
            scale: number;
        };
    };
    signageConfig?: {
        image: boolean;
        color: string;
        opacity: boolean;
    };
};

/**
 * @description 添加地图图层配置
 * @summary Response data types
 * @url [ post ] /api/GeoConfigs/layer
 * @bizName geoDataBiz
 */
export type PostGeoConfigsLayerResTypeByGds = {
    id: string;
    productId: string;
    name: string;
    path: string;
    parentId: string;
    group: string;
    groupKey: string;
    layerIcon: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    layerIconBackground: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    pointIcon: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    clusterIcon: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    isChecked: boolean;
    isShow: boolean;
    isShowLabel: boolean;
    isShowAlert: boolean;
    hasChildren: boolean;
    zoom: {
        type: number;
        defaultZoom: {
            lowViewPoint: {
                zoom: {
                    minZoom: number;
                    maxZoom: number;
                };
                defaultZoom: number;
                defaultPitch: number;
            };
            middleViewPoint: {
                zoom: {
                    minZoom: number;
                    maxZoom: number;
                };
                defaultZoom: number;
                defaultPitch: number;
            };
            highViewPoint: {
                zoom: {
                    minZoom: number;
                    maxZoom: number;
                };
                defaultZoom: number;
                defaultPitch: number;
            };
        };
        customZoom: {
            minZoom: number;
            maxZoom: number;
        };
    };
    lowViewPointCluster: {
        selectType: number;
        value: string;
    };
    middleViewPointCluster: {
        selectType: number;
        value: string;
    };
    highViewPointCluster: {
        selectType: number;
        value: string;
    };
    customViewPointCluster: {
        selectType: number;
        value: string;
    };
    layerType: string;
    lineConfig: {
        color: string;
        opacity: number;
        width: number;
        isUseDataHeight: boolean;
        height: number;
        isDynamic: boolean;
        dynamicStyleUrl: string;
        dynamicSpeed: number;
        clampToGround: boolean;
        duration: number;
        lineType: string;
        dashLength: Array<number>;
        pattern: string;
        gapWidth: number;
        offset: number;
        blur: number;
        gradient: string;
        material: {
            polyLineGlowMaterialProperty: {
                color: string;
                glowPower: number;
                taperPower: number;
            };
            polyLineOutlineMaterialProperty: {
                color: string;
                outlineColor: string;
                outlineWidth: number;
            };
        };
        extension: Record<string, any>;
    };
    polygonConfig: {
        color: string;
        opacity: number;
        boundaryConfig: {
            isDisplay: boolean;
            color: string;
            width: number;
            opacity: number;
        };
        isUseDataHeight: boolean;
        height: number;
        extrusionHeight: number;
        fill: boolean;
        outline: boolean;
        outlineWidth: number;
        outlineColor: string;
        outlineColorOpacity: number;
        outlineHeight: number;
        colorFieldName: number;
        clampToGround: boolean;
        filterFieldName: string;
        filterFieldValue: string;
        fillImageUrl: string;
        antialias: boolean;
        pattern: string;
        translate: Array<number>;
        material: {
            colorMaterialProperty: {
                color: string;
            };
            imageMaterialProperty: {
                image: string;
                color: string;
                repeat: string;
                transparent: boolean;
            };
            checkerboardMaterialProperty: {
                evenColor: string;
                oddColor: string;
                repeat: string;
            };
            stripeMaterialProperty: {
                evenColor: string;
                oddColor: string;
                repeat: number;
                offset: number;
                orientation: string;
            };
            gridMaterialProperty: {
                color: string;
                cellAlpha: number;
                lineCount: string;
                lineThickness: string;
                lineOffset: string;
            };
        };
    };
    areaConfig: {
        fill: boolean;
        fillColor: string;
        fillColorOpacity: number;
        extrudedHeight: number;
        clampToGround: boolean;
        lineColor: string;
        lineColorOpacity: number;
        isShowLine: boolean;
        lineWidth: number;
    };
    barConfig: {
        color: string;
        colorOpacity: number;
        clampToGround: boolean;
        radius: number;
        barHeight: number;
        entityHeight: number;
        isShowText: boolean;
        textConfig: {
            color: string;
            font: string;
            isShowBackground: boolean;
            background: string;
            backgroundOpacity: number;
            isShowLine: boolean;
            lineColor: string;
            lineWidth: number;
            scale: number;
        };
    };
    signageConfig: {
        image: boolean;
        color: string;
        opacity: boolean;
    };
};

/**
 * @description 根据路径查询地图图层配置
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs/layer
 * @bizName geoDataBiz
 */
export type GetGeoConfigsLayerReqTypeByGds = {
    Path: string;
    ProductId: string;
    MapType?: number;
    'X-version'?: string;
};

/**
 * @description 更新地图图层配置
 * @summary Request data types
 * @url [ put ] /api/GeoConfigs/layers/{id}
 * @bizName geoDataBiz
 */
export type PutGeoConfigsLayersIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    productId?: string;
    mapType?: 0 | 1 | 2;
    name?: string;
    path?: string;
    layerIcon?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    layerIconBackground?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    pointIcon?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    clusterIcon?: {
        iconType: 0 | 1 | 2;
        iconName: string;
        iconValue: string;
    };
    isChecked?: boolean;
    isShow?: boolean;
    isShowLabel?: boolean;
    isShowAlert?: boolean;
    zoom?: {
        type: number;
        defaultZoom: Array<Record<string, any>>;
        customZoom: {
            minZoom: number;
            maxZoom: number;
        };
    };
    lowViewPointCluster?: {
        selectType: number;
        value: string;
    };
    middleViewPointCluster?: {
        selectType: number;
        value: string;
    };
    highViewPointCluster?: {
        selectType: number;
        value: string;
    };
    customViewPointCluster?: {
        selectType: number;
        value: string;
    };
    layerType?: string;
    lineConfig?: {
        color: string;
        opacity: number;
        width: number;
        isUseDataHeight: boolean;
        height: number;
        isDynamic: boolean;
        dynamicStyleUrl: string;
        dynamicSpeed: number;
        clampToGround: boolean;
        duration: number;
        lineType: string;
        dashLength: Array<number>;
        pattern: string;
        gapWidth: number;
        offset: number;
        blur: number;
        gradient: string;
        material: {
            polyLineGlowMaterialProperty: {
                color: string;
                glowPower: number;
                taperPower: number;
            };
            polyLineOutlineMaterialProperty: {
                color: string;
                outlineColor: string;
                outlineWidth: number;
            };
        };
        extension: Record<string, any>;
    };
    polygonConfig?: {
        color: string;
        opacity: number;
        boundaryConfig: {
            isDisplay: boolean;
            color: string;
            width: number;
            opacity: number;
        };
        isUseDataHeight: boolean;
        height: number;
        extrusionHeight: number;
        fill: boolean;
        outline: boolean;
        outlineWidth: number;
        outlineColor: string;
        outlineColorOpacity: number;
        outlineHeight: number;
        colorFieldName: number;
        clampToGround: boolean;
        filterFieldName: string;
        filterFieldValue: string;
        fillImageUrl: string;
        antialias: boolean;
        pattern: string;
        translate: Array<number>;
        material: {
            colorMaterialProperty: {
                color: string;
            };
            imageMaterialProperty: {
                image: string;
                color: string;
                repeat: string;
                transparent: boolean;
            };
            checkerboardMaterialProperty: {
                evenColor: string;
                oddColor: string;
                repeat: string;
            };
            stripeMaterialProperty: {
                evenColor: string;
                oddColor: string;
                repeat: number;
                offset: number;
                orientation: string;
            };
            gridMaterialProperty: {
                color: string;
                cellAlpha: number;
                lineCount: string;
                lineThickness: string;
                lineOffset: string;
            };
        };
    };
    areaConfig?: {
        fill: boolean;
        fillColor: string;
        fillColorOpacity: number;
        extrudedHeight: number;
        clampToGround: boolean;
        lineColor: string;
        lineColorOpacity: number;
        isShowLine: boolean;
        lineWidth: number;
    };
    barConfig?: {
        color: string;
        colorOpacity: number;
        clampToGround: boolean;
        radius: number;
        barHeight: number;
        entityHeight: number;
        isShowText: boolean;
        textConfig: {
            color: string;
            font: string;
            isShowBackground: boolean;
            background: string;
            backgroundOpacity: number;
            isShowLine: boolean;
            lineColor: string;
            lineWidth: number;
            scale: number;
        };
    };
    signageConfig?: {
        image: boolean;
        color: string;
        opacity: boolean;
    };
};

/**
 * @description 根据Id删除图层配置
 * @summary Request data types
 * @url [ delete ] /api/GeoConfigs/layers/{id}
 * @bizName geoDataBiz
 */
export type DeleteGeoConfigsLayersIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 分页查询地图图层根节点配置
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs/layers/root
 * @bizName geoDataBiz
 */
export type GetGeoConfigsLayersRootReqTypeByGds = {
    ProductId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询地图图层根节点配置
 * @summary Response data types
 * @url [ get ] /api/GeoConfigs/layers/root
 * @bizName geoDataBiz
 */
export type GetGeoConfigsLayersRootResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        productId: string;
        name: string;
        path: string;
        parentId: string;
        group: string;
        groupKey: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        layerIconBackground: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        pointIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        clusterIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        isChecked: boolean;
        isShow: boolean;
        isShowLabel: boolean;
        isShowAlert: boolean;
        hasChildren: boolean;
        zoom: {
            type: number;
            defaultZoom: {
                lowViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                middleViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                highViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
            };
            customZoom: {
                minZoom: number;
                maxZoom: number;
            };
        };
        lowViewPointCluster: {
            selectType: number;
            value: string;
        };
        middleViewPointCluster: {
            selectType: number;
            value: string;
        };
        highViewPointCluster: {
            selectType: number;
            value: string;
        };
        customViewPointCluster: {
            selectType: number;
            value: string;
        };
        layerType: string;
        lineConfig: {
            color: string;
            opacity: number;
            width: number;
            isUseDataHeight: boolean;
            height: number;
            isDynamic: boolean;
            dynamicStyleUrl: string;
            dynamicSpeed: number;
            clampToGround: boolean;
            duration: number;
            lineType: string;
            dashLength: Array<number>;
            pattern: string;
            gapWidth: number;
            offset: number;
            blur: number;
            gradient: string;
            material: {
                polyLineGlowMaterialProperty: {
                    color: string;
                    glowPower: number;
                    taperPower: number;
                };
                polyLineOutlineMaterialProperty: {
                    color: string;
                    outlineColor: string;
                    outlineWidth: number;
                };
            };
            extension: Record<string, any>;
        };
        polygonConfig: {
            color: string;
            opacity: number;
            boundaryConfig: {
                isDisplay: boolean;
                color: string;
                width: number;
                opacity: number;
            };
            isUseDataHeight: boolean;
            height: number;
            extrusionHeight: number;
            fill: boolean;
            outline: boolean;
            outlineWidth: number;
            outlineColor: string;
            outlineColorOpacity: number;
            outlineHeight: number;
            colorFieldName: number;
            clampToGround: boolean;
            filterFieldName: string;
            filterFieldValue: string;
            fillImageUrl: string;
            antialias: boolean;
            pattern: string;
            translate: Array<number>;
            material: {
                colorMaterialProperty: {
                    color: string;
                };
                imageMaterialProperty: {
                    image: string;
                    color: string;
                    repeat: string;
                    transparent: boolean;
                };
                checkerboardMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: string;
                };
                stripeMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: number;
                    offset: number;
                    orientation: string;
                };
                gridMaterialProperty: {
                    color: string;
                    cellAlpha: number;
                    lineCount: string;
                    lineThickness: string;
                    lineOffset: string;
                };
            };
        };
        areaConfig: {
            fill: boolean;
            fillColor: string;
            fillColorOpacity: number;
            extrudedHeight: number;
            clampToGround: boolean;
            lineColor: string;
            lineColorOpacity: number;
            isShowLine: boolean;
            lineWidth: number;
        };
        barConfig: {
            color: string;
            colorOpacity: number;
            clampToGround: boolean;
            radius: number;
            barHeight: number;
            entityHeight: number;
            isShowText: boolean;
            textConfig: {
                color: string;
                font: string;
                isShowBackground: boolean;
                background: string;
                backgroundOpacity: number;
                isShowLine: boolean;
                lineColor: string;
                lineWidth: number;
                scale: number;
            };
        };
        signageConfig: {
            image: boolean;
            color: string;
            opacity: boolean;
        };
    }>;
};

/**
 * @description 分页查询地图图层子节点配置
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs/layers/children
 * @bizName geoDataBiz
 */
export type GetGeoConfigsLayersChildrenReqTypeByGds = {
    Path: string;
    ProductId: string;
    MapType?: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询地图图层子节点配置
 * @summary Response data types
 * @url [ get ] /api/GeoConfigs/layers/children
 * @bizName geoDataBiz
 */
export type GetGeoConfigsLayersChildrenResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        productId: string;
        name: string;
        path: string;
        parentId: string;
        group: string;
        groupKey: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        layerIconBackground: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        pointIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        clusterIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        isChecked: boolean;
        isShow: boolean;
        isShowLabel: boolean;
        isShowAlert: boolean;
        hasChildren: boolean;
        zoom: {
            type: number;
            defaultZoom: {
                lowViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                middleViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                highViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
            };
            customZoom: {
                minZoom: number;
                maxZoom: number;
            };
        };
        lowViewPointCluster: {
            selectType: number;
            value: string;
        };
        middleViewPointCluster: {
            selectType: number;
            value: string;
        };
        highViewPointCluster: {
            selectType: number;
            value: string;
        };
        customViewPointCluster: {
            selectType: number;
            value: string;
        };
        layerType: string;
        lineConfig: {
            color: string;
            opacity: number;
            width: number;
            isUseDataHeight: boolean;
            height: number;
            isDynamic: boolean;
            dynamicStyleUrl: string;
            dynamicSpeed: number;
            clampToGround: boolean;
            duration: number;
            lineType: string;
            dashLength: Array<number>;
            pattern: string;
            gapWidth: number;
            offset: number;
            blur: number;
            gradient: string;
            material: {
                polyLineGlowMaterialProperty: {
                    color: string;
                    glowPower: number;
                    taperPower: number;
                };
                polyLineOutlineMaterialProperty: {
                    color: string;
                    outlineColor: string;
                    outlineWidth: number;
                };
            };
            extension: Record<string, any>;
        };
        polygonConfig: {
            color: string;
            opacity: number;
            boundaryConfig: {
                isDisplay: boolean;
                color: string;
                width: number;
                opacity: number;
            };
            isUseDataHeight: boolean;
            height: number;
            extrusionHeight: number;
            fill: boolean;
            outline: boolean;
            outlineWidth: number;
            outlineColor: string;
            outlineColorOpacity: number;
            outlineHeight: number;
            colorFieldName: number;
            clampToGround: boolean;
            filterFieldName: string;
            filterFieldValue: string;
            fillImageUrl: string;
            antialias: boolean;
            pattern: string;
            translate: Array<number>;
            material: {
                colorMaterialProperty: {
                    color: string;
                };
                imageMaterialProperty: {
                    image: string;
                    color: string;
                    repeat: string;
                    transparent: boolean;
                };
                checkerboardMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: string;
                };
                stripeMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: number;
                    offset: number;
                    orientation: string;
                };
                gridMaterialProperty: {
                    color: string;
                    cellAlpha: number;
                    lineCount: string;
                    lineThickness: string;
                    lineOffset: string;
                };
            };
        };
        areaConfig: {
            fill: boolean;
            fillColor: string;
            fillColorOpacity: number;
            extrudedHeight: number;
            clampToGround: boolean;
            lineColor: string;
            lineColorOpacity: number;
            isShowLine: boolean;
            lineWidth: number;
        };
        barConfig: {
            color: string;
            colorOpacity: number;
            clampToGround: boolean;
            radius: number;
            barHeight: number;
            entityHeight: number;
            isShowText: boolean;
            textConfig: {
                color: string;
                font: string;
                isShowBackground: boolean;
                background: string;
                backgroundOpacity: number;
                isShowLine: boolean;
                lineColor: string;
                lineWidth: number;
                scale: number;
            };
        };
        signageConfig: {
            image: boolean;
            color: string;
            opacity: boolean;
        };
    }>;
};

/**
 * @description 分页查询地图图层底层节点配置
 * @summary Request data types
 * @url [ get ] /api/GeoConfigs/layers/floors
 * @bizName geoDataBiz
 */
export type GetGeoConfigsLayersFloorsReqTypeByGds = {
    Path: string;
    ProductId: string;
    MapType?: number;
    page?: number;
    per_page?: number;
    areaCodes?: string;
    'X-version'?: string;
};

/**
 * @description 分页查询地图图层底层节点配置
 * @summary Response data types
 * @url [ get ] /api/GeoConfigs/layers/floors
 * @bizName geoDataBiz
 */
export type GetGeoConfigsLayersFloorsResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerId: string;
        number: string;
        subLayerTotal: number;
        facilitiesTotal: number;
        id: string;
        productId: string;
        name: string;
        path: string;
        parentId: string;
        group: string;
        groupKey: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        layerIconBackground: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        pointIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        clusterIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        isChecked: boolean;
        isShow: boolean;
        isShowLabel: boolean;
        isShowAlert: boolean;
        hasChildren: boolean;
        zoom: {
            type: number;
            defaultZoom: {
                lowViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                middleViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
                highViewPoint: {
                    zoom: {
                        minZoom: number;
                        maxZoom: number;
                    };
                    defaultZoom: number;
                    defaultPitch: number;
                };
            };
            customZoom: {
                minZoom: number;
                maxZoom: number;
            };
        };
        lowViewPointCluster: {
            selectType: number;
            value: string;
        };
        middleViewPointCluster: {
            selectType: number;
            value: string;
        };
        highViewPointCluster: {
            selectType: number;
            value: string;
        };
        customViewPointCluster: {
            selectType: number;
            value: string;
        };
        layerType: string;
        lineConfig: {
            color: string;
            opacity: number;
            width: number;
            isUseDataHeight: boolean;
            height: number;
            isDynamic: boolean;
            dynamicStyleUrl: string;
            dynamicSpeed: number;
            clampToGround: boolean;
            duration: number;
            lineType: string;
            dashLength: Array<number>;
            pattern: string;
            gapWidth: number;
            offset: number;
            blur: number;
            gradient: string;
            material: {
                polyLineGlowMaterialProperty: {
                    color: string;
                    glowPower: number;
                    taperPower: number;
                };
                polyLineOutlineMaterialProperty: {
                    color: string;
                    outlineColor: string;
                    outlineWidth: number;
                };
            };
            extension: Record<string, any>;
        };
        polygonConfig: {
            color: string;
            opacity: number;
            boundaryConfig: {
                isDisplay: boolean;
                color: string;
                width: number;
                opacity: number;
            };
            isUseDataHeight: boolean;
            height: number;
            extrusionHeight: number;
            fill: boolean;
            outline: boolean;
            outlineWidth: number;
            outlineColor: string;
            outlineColorOpacity: number;
            outlineHeight: number;
            colorFieldName: number;
            clampToGround: boolean;
            filterFieldName: string;
            filterFieldValue: string;
            fillImageUrl: string;
            antialias: boolean;
            pattern: string;
            translate: Array<number>;
            material: {
                colorMaterialProperty: {
                    color: string;
                };
                imageMaterialProperty: {
                    image: string;
                    color: string;
                    repeat: string;
                    transparent: boolean;
                };
                checkerboardMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: string;
                };
                stripeMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: number;
                    offset: number;
                    orientation: string;
                };
                gridMaterialProperty: {
                    color: string;
                    cellAlpha: number;
                    lineCount: string;
                    lineThickness: string;
                    lineOffset: string;
                };
            };
        };
        areaConfig: {
            fill: boolean;
            fillColor: string;
            fillColorOpacity: number;
            extrudedHeight: number;
            clampToGround: boolean;
            lineColor: string;
            lineColorOpacity: number;
            isShowLine: boolean;
            lineWidth: number;
        };
        barConfig: {
            color: string;
            colorOpacity: number;
            clampToGround: boolean;
            radius: number;
            barHeight: number;
            entityHeight: number;
            isShowText: boolean;
            textConfig: {
                color: string;
                font: string;
                isShowBackground: boolean;
                background: string;
                backgroundOpacity: number;
                isShowLine: boolean;
                lineColor: string;
                lineWidth: number;
                scale: number;
            };
        };
        signageConfig: {
            image: boolean;
            color: string;
            opacity: boolean;
        };
    }>;
};

/**
 * @description 导入地图图层配置
 * @summary Request data types
 * @url [ post ] /api/GeoConfigs/layers/import
 * @bizName geoDataBiz
 */
export type PostGeoConfigsLayersImportReqTypeByGds = {
    'X-version'?: string;
    layerConfigItems?: Array<{
        resourceId: string;
        productId: string;
        mapType: 0 | 1 | 2;
        name: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        layerIconBackground: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        pointIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        clusterIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        isChecked: boolean;
        isShow: boolean;
        isShowLabel: boolean;
        isShowAlert: boolean;
        zoom: {
            type: number;
            defaultZoom: Array<Record<string, any>>;
            customZoom: {
                minZoom: number;
                maxZoom: number;
            };
        };
        lowViewPointCluster: {
            selectType: number;
            value: string;
        };
        middleViewPointCluster: {
            selectType: number;
            value: string;
        };
        highViewPointCluster: {
            selectType: number;
            value: string;
        };
        customViewPointCluster: {
            selectType: number;
            value: string;
        };
        layerType: string;
        lineConfig: {
            color: string;
            opacity: number;
            width: number;
            isUseDataHeight: boolean;
            height: number;
            isDynamic: boolean;
            dynamicStyleUrl: string;
            dynamicSpeed: number;
            clampToGround: boolean;
            duration: number;
            lineType: string;
            dashLength: Array<number>;
            pattern: string;
            gapWidth: number;
            offset: number;
            blur: number;
            gradient: string;
            material: {
                polyLineGlowMaterialProperty: {
                    color: string;
                    glowPower: number;
                    taperPower: number;
                };
                polyLineOutlineMaterialProperty: {
                    color: string;
                    outlineColor: string;
                    outlineWidth: number;
                };
            };
            extension: Record<string, any>;
        };
        polygonConfig: {
            color: string;
            opacity: number;
            boundaryConfig: {
                isDisplay: boolean;
                color: string;
                width: number;
                opacity: number;
            };
            isUseDataHeight: boolean;
            height: number;
            extrusionHeight: number;
            fill: boolean;
            outline: boolean;
            outlineWidth: number;
            outlineColor: string;
            outlineColorOpacity: number;
            outlineHeight: number;
            colorFieldName: number;
            clampToGround: boolean;
            filterFieldName: string;
            filterFieldValue: string;
            fillImageUrl: string;
            antialias: boolean;
            pattern: string;
            translate: Array<number>;
            material: {
                colorMaterialProperty: {
                    color: string;
                };
                imageMaterialProperty: {
                    image: string;
                    color: string;
                    repeat: string;
                    transparent: boolean;
                };
                checkerboardMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: string;
                };
                stripeMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: number;
                    offset: number;
                    orientation: string;
                };
                gridMaterialProperty: {
                    color: string;
                    cellAlpha: number;
                    lineCount: string;
                    lineThickness: string;
                    lineOffset: string;
                };
            };
        };
        areaConfig: {
            fill: boolean;
            fillColor: string;
            fillColorOpacity: number;
            extrudedHeight: number;
            clampToGround: boolean;
            lineColor: string;
            lineColorOpacity: number;
            isShowLine: boolean;
            lineWidth: number;
        };
        barConfig: {
            color: string;
            colorOpacity: number;
            clampToGround: boolean;
            radius: number;
            barHeight: number;
            entityHeight: number;
            isShowText: boolean;
            textConfig: {
                color: string;
                font: string;
                isShowBackground: boolean;
                background: string;
                backgroundOpacity: number;
                isShowLine: boolean;
                lineColor: string;
                lineWidth: number;
                scale: number;
            };
        };
        signageConfig: {
            image: boolean;
            color: string;
            opacity: boolean;
        };
    }>;
};

/**
 * @description 导入地图图层配置
 * @summary Response data types
 * @url [ post ] /api/GeoConfigs/layers/import
 * @bizName geoDataBiz
 */
export type PostGeoConfigsLayersImportResTypeByGds = {
    hasError: boolean;
    errorMessage: string;
};

/**
 * @description 覆盖子图层配置
 * @summary Request data types
 * @url [ put ] /api/GeoConfigs/layers/coverage
 * @bizName geoDataBiz
 */
export type PutGeoConfigsLayersCoverageReqTypeByGds = {
    'X-version'?: string;
    path: string;
    productId: string;
};

/**
 * @description 根据 Id 获取物资
 * @summary Request data types
 * @url [ get ] /api/Goods/{id}
 * @bizName geoDataBiz
 */
export type GetGoodsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据 Id 获取物资
 * @summary Response data types
 * @url [ get ] /api/Goods/{id}
 * @bizName geoDataBiz
 */
export type GetGoodsIdResTypeByGds = {
    facility: {
        id: string;
        name: string;
        address: string;
        description: string;
    };
    resourceId: string;
    description: string;
    organization: string;
    owner: string;
    number: string;
    amount: number;
    unit: string;
    subType: string;
    mainType: string;
    entryTime: string;
    platformId: string;
    areaCode: string;
    longitude: number;
    latitude: number;
    id: string;
    name: string;
};

/**
 * @description 模糊查找设施物资
 * @summary Request data types
 * @url [ post ] /api/Goods/search
 * @bizName geoDataBiz
 */
export type PostGoodsSearchReqTypeByGds = {
    'X-version'?: string;
    locations?: Array<{
        longitude: number;
        latitude: number;
    }>;
    areaCodes?: Array<string>;
    prefixAreaCodes?: Array<string>;
    keyword?: string;
    goodsSubType?: string;
    maxCount?: number;
};

/**
 * @description 模糊查找设施物资
 * @summary Response data types
 * @url [ post ] /api/Goods/search
 * @bizName geoDataBiz
 */
export type PostGoodsSearchResTypeByGds = {
    totalCount: number;
    records: Array<{
        facility: {
            id: string;
            name: string;
            address: string;
            description: string;
        };
        resourceId: string;
        description: string;
        organization: string;
        owner: string;
        number: string;
        amount: number;
        unit: string;
        subType: string;
        mainType: string;
        entryTime: string;
        platformId: string;
        areaCode: string;
        longitude: number;
        latitude: number;
        id: string;
        name: string;
    }>;
};

/**
 * @description 同步物资的设施Id和AreaCode
 * @summary Request data types
 * @url [ post ] /api/Goods/sync
 * @bizName geoDataBiz
 */
export type PostGoodsSyncReqTypeByGds = {
    'X-version'?: string;
};

/**
 * @description 根据Id或resourceId批量删除物资
 * @summary Request data types
 * @url [ delete ] /api/Goods
 * @bizName geoDataBiz
 */
export type DeleteGoodsReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 根据Id查找标签
 * @summary Request data types
 * @url [ get ] /api/Labels/{id}
 * @bizName geoDataBiz
 */
export type GetLabelsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据Id查找标签
 * @summary Response data types
 * @url [ get ] /api/Labels/{id}
 * @bizName geoDataBiz
 */
export type GetLabelsIdResTypeByGds = {
    id: string;
    title: string;
    color: string;
    createdTime: string;
    modifyTime: string;
    resourceId: string;
    description: string;
};

/**
 * @description 根据Id删除标签
 * @summary Request data types
 * @url [ delete ] /api/Labels/{id}
 * @bizName geoDataBiz
 */
export type DeleteLabelsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据Id更新标签
 * @summary Request data types
 * @url [ put ] /api/Labels/{id}
 * @bizName geoDataBiz
 */
export type PutLabelsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * @description 多条件查询标签
 * @summary Request data types
 * @url [ get ] /api/Labels/search
 * @bizName geoDataBiz
 */
export type GetLabelsSearchReqTypeByGds = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 多条件查询标签
 * @summary Response data types
 * @url [ get ] /api/Labels/search
 * @bizName geoDataBiz
 */
export type GetLabelsSearchResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        title: string;
        color: string;
        createdTime: string;
        modifyTime: string;
        resourceId: string;
        description: string;
    }>;
};

/**
 * @description 添加新标签
 * @summary Request data types
 * @url [ post ] /api/Labels
 * @bizName geoDataBiz
 */
export type PostLabelsReqTypeByGds = {
    'X-version'?: string;
    title?: string;
    color?: string;
    description?: string;
};

/**
 * @description 导入标签
 * @summary Request data types
 * @url [ post ] /api/Labels/import
 * @bizName geoDataBiz
 */
export type PostLabelsImportReqTypeByGds = {
    'X-version'?: string;
    addLabelRequests?: Array<{
        title: string;
        color: string;
        description: string;
        resourceId: string;
    }>;
};

/**
 * @description 查询图层效果配置
 * @summary Request data types
 * @url [ get ] /api/LayerEffectConfig/{id}
 * @bizName geoDataBiz
 */
export type GetLayerEffectConfigIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询图层效果配置
 * @summary Response data types
 * @url [ get ] /api/LayerEffectConfig/{id}
 * @bizName geoDataBiz
 */
export type GetLayerEffectConfigIdResTypeByGds = {
    id: string;
    resourceId: string;
    name: string;
    effectType: string;
    url: string;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    thumbnail: string;
    urlFormat: string;
    loadOptions: Record<string, any>;
};

/**
 * @description 修改图层效果配置
 * @summary Request data types
 * @url [ put ] /api/LayerEffectConfig/{id}
 * @bizName geoDataBiz
 */
export type PutLayerEffectConfigIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    effectType?: string;
    url?: string;
    thumbnail?: string;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    loadOptions?: Record<string, any>;
};

/**
 * @description 删除图层效果配置
 * @summary Request data types
 * @url [ delete ] /api/LayerEffectConfig/{id}
 * @bizName geoDataBiz
 */
export type DeleteLayerEffectConfigIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 添加图层效果配置
 * @summary Request data types
 * @url [ post ] /api/LayerEffectConfig
 * @bizName geoDataBiz
 */
export type PostLayerEffectConfigReqTypeByGds = {
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    effectType?: string;
    url?: string;
    thumbnail?: string;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    loadOptions?: Record<string, any>;
};

/**
 * @description 添加图层效果配置
 * @summary Response data types
 * @url [ post ] /api/LayerEffectConfig
 * @bizName geoDataBiz
 */
export type PostLayerEffectConfigResTypeByGds = {
    id: string;
    resourceId: string;
    name: string;
    effectType: string;
    url: string;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    thumbnail: string;
    urlFormat: string;
    loadOptions: Record<string, any>;
};

/**
 * @description 分页查询图层效果配置集合
 * @summary Request data types
 * @url [ get ] /api/LayerEffectConfig
 * @bizName geoDataBiz
 */
export type GetLayerEffectConfigReqTypeByGds = {
    ReturnThumbnail?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询图层效果配置集合
 * @summary Response data types
 * @url [ get ] /api/LayerEffectConfig
 * @bizName geoDataBiz
 */
export type GetLayerEffectConfigResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        name: string;
        effectType: string;
        url: string;
        needProxy: boolean;
        proxyNetworkId: string;
        proxyIp: string;
        proxyPort: number;
        thumbnail: string;
        urlFormat: string;
        loadOptions: Record<string, any>;
    }>;
};

/**
 * @description 重新加载图层的缓存
 * @summary Request data types
 * @url [ post ] /api/Layers/reload
 * @bizName geoDataBiz
 */
export type PostLayersReloadReqTypeByGds = {
    'X-version'?: string;
};

/**
 * @description 重新加载图层的缓存
 * @summary Response data types
 * @url [ post ] /api/Layers/reload
 * @bizName geoDataBiz
 */
export type PostLayersReloadResTypeByGds = {
    totalCount: number;
    records: Array<{
        isChecked: boolean;
        subLayerTotal: number;
        facilitiesTotal: number;
        layerId: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 获取设施图层根节点
 * @summary Request data types
 * @url [ get ] /api/Layers/root
 * @bizName geoDataBiz
 */
export type GetLayersRootReqTypeByGds = {
    productId?: string;
    mapType?: number;
    areaCode?: string;
    'X-version'?: string;
};

/**
 * @description 获取设施图层根节点
 * @summary Response data types
 * @url [ get ] /api/Layers/root
 * @bizName geoDataBiz
 */
export type GetLayersRootResTypeByGds = {
    totalCount: number;
    records: Array<{
        isChecked: boolean;
        subLayerTotal: number;
        facilitiesTotal: number;
        layerId: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 获取设施图层子节点
 * @summary Request data types
 * @url [ get ] /api/Layers/children
 * @bizName geoDataBiz
 */
export type GetLayersChildrenReqTypeByGds = {
    Path: string;
    ProductId?: string;
    MapType?: number;
    page?: number;
    per_page?: number;
    areaCode?: string;
    'X-version'?: string;
};

/**
 * @description 获取设施图层子节点
 * @summary Response data types
 * @url [ get ] /api/Layers/children
 * @bizName geoDataBiz
 */
export type GetLayersChildrenResTypeByGds = {
    totalCount: number;
    records: Array<{
        isChecked: boolean;
        subLayerTotal: number;
        facilitiesTotal: number;
        layerId: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 模糊查询图层
 * @summary Request data types
 * @url [ get ] /api/Layers/layers
 * @bizName geoDataBiz
 */
export type GetLayersLayersReqTypeByGds = {
    ProductId?: string;
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 模糊查询图层
 * @summary Response data types
 * @url [ get ] /api/Layers/layers
 * @bizName geoDataBiz
 */
export type GetLayersLayersResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerId: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 查询全部图层类型（GroupKey）
 * @summary Request data types
 * @url [ get ] /api/Layers/group_keys
 * @bizName geoDataBiz
 */
export type GetLayersGroupKeysReqTypeByGds = {
    ProductId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查询全部图层类型（GroupKey）
 * @summary Response data types
 * @url [ get ] /api/Layers/group_keys
 * @bizName geoDataBiz
 */
export type GetLayersGroupKeysResTypeByGds = {
    totalCount: number;
    records: Array<{
        groupKey: string;
        groupName: string;
    }>;
};

/**
 * @description 根据图层id集合批量获取图层信息
 * @summary Request data types
 * @url [ post ] /api/Layers/batch
 * @bizName geoDataBiz
 */
export type PostLayersBatchReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 根据图层id集合批量获取图层信息
 * @summary Response data types
 * @url [ post ] /api/Layers/batch
 * @bizName geoDataBiz
 */
export type PostLayersBatchResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 根据Id集合或number集合批量删除图层
 * @summary Request data types
 * @url [ delete ] /api/Layers/batch
 * @bizName geoDataBiz
 */
export type DeleteLayersBatchReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 批量图层路径查询图层节点
 * @summary Request data types
 * @url [ post ] /api/Layers/node/batch
 * @bizName geoDataBiz
 */
export type PostLayersNodeBatchReqTypeByGds = {
    'X-version'?: string;
    paths?: Array<string>;
    areaCodes?: Array<string>;
    productId: string;
};

/**
 * @description 批量图层路径查询图层节点
 * @summary Response data types
 * @url [ post ] /api/Layers/node/batch
 * @bizName geoDataBiz
 */
export type PostLayersNodeBatchResTypeByGds = {
    totalCount: number;
    records: Array<{
        isChecked: boolean;
        subLayerTotal: number;
        facilitiesTotal: number;
        layerId: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 条件查询图层（不分层，仅用于IES导出）
 * @summary Request data types
 * @url [ get ] /api/Layers/search
 * @bizName geoDataBiz
 */
export type GetLayersSearchReqTypeByGds = {
    ProductId?: string;
    keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 条件查询图层（不分层，仅用于IES导出）
 * @summary Response data types
 * @url [ get ] /api/Layers/search
 * @bizName geoDataBiz
 */
export type GetLayersSearchResTypeByGds = {
    totalCount: number;
    records: Array<{
        number: string;
        order: number;
        id: string;
        name: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 导出图层
 * @summary Request data types
 * @url [ post ] /api/Layers/export
 * @bizName geoDataBiz
 */
export type PostLayersExportReqTypeByGds = {
    'X-version'?: string;
    productId?: string;
};

/**
 * @description 导出图层
 * @summary Response data types
 * @url [ post ] /api/Layers/export
 * @bizName geoDataBiz
 */
export type PostLayersExportResTypeByGds = {
    layers: Array<{
        id: string;
        number: string;
        name: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
        order: number;
    }>;
    layerConfigs: Array<{
        id: string;
        productId: string;
        mapType: 0 | 1 | 2;
        name: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        layerIconBackground: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        pointIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        clusterIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        isChecked: boolean;
        isShow: boolean;
        isShowLabel: boolean;
        isShowAlert: boolean;
        zoom: {
            type: number;
            defaultZoom: Array<Record<string, any>>;
            customZoom: {
                minZoom: number;
                maxZoom: number;
            };
        };
        lowViewPointCluster: {
            selectType: number;
            value: string;
        };
        middleViewPointCluster: {
            selectType: number;
            value: string;
        };
        highViewPointCluster: {
            selectType: number;
            value: string;
        };
        customViewPointCluster: {
            selectType: number;
            value: string;
        };
        layerType: string;
        lineConfig: {
            color: string;
            opacity: number;
            width: number;
            isUseDataHeight: boolean;
            height: number;
            isDynamic: boolean;
            dynamicStyleUrl: string;
            dynamicSpeed: number;
            clampToGround: boolean;
            duration: number;
            lineType: string;
            dashLength: Array<number>;
            pattern: string;
            gapWidth: number;
            offset: number;
            blur: number;
            gradient: string;
            material: {
                polyLineGlowMaterialProperty: {
                    color: string;
                    glowPower: number;
                    taperPower: number;
                };
                polyLineOutlineMaterialProperty: {
                    color: string;
                    outlineColor: string;
                    outlineWidth: number;
                };
            };
            extension: Record<string, any>;
        };
        polygonConfig: {
            color: string;
            opacity: number;
            boundaryConfig: {
                isDisplay: boolean;
                color: string;
                width: number;
                opacity: number;
            };
            isUseDataHeight: boolean;
            height: number;
            extrusionHeight: number;
            fill: boolean;
            outline: boolean;
            outlineWidth: number;
            outlineColor: string;
            outlineColorOpacity: number;
            outlineHeight: number;
            colorFieldName: number;
            clampToGround: boolean;
            filterFieldName: string;
            filterFieldValue: string;
            fillImageUrl: string;
            antialias: boolean;
            pattern: string;
            translate: Array<number>;
            material: {
                colorMaterialProperty: {
                    color: string;
                };
                imageMaterialProperty: {
                    image: string;
                    color: string;
                    repeat: string;
                    transparent: boolean;
                };
                checkerboardMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: string;
                };
                stripeMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: number;
                    offset: number;
                    orientation: string;
                };
                gridMaterialProperty: {
                    color: string;
                    cellAlpha: number;
                    lineCount: string;
                    lineThickness: string;
                    lineOffset: string;
                };
            };
        };
        areaConfig: {
            fill: boolean;
            fillColor: string;
            fillColorOpacity: number;
            extrudedHeight: number;
            clampToGround: boolean;
            lineColor: string;
            lineColorOpacity: number;
            isShowLine: boolean;
            lineWidth: number;
        };
        barConfig: {
            color: string;
            colorOpacity: number;
            clampToGround: boolean;
            radius: number;
            barHeight: number;
            entityHeight: number;
            isShowText: boolean;
            textConfig: {
                color: string;
                font: string;
                isShowBackground: boolean;
                background: string;
                backgroundOpacity: number;
                isShowLine: boolean;
                lineColor: string;
                lineWidth: number;
                scale: number;
            };
        };
        signageConfig: {
            image: boolean;
            color: string;
            opacity: boolean;
        };
        resourceId: string;
    }>;
    geoConfigs: Array<{
        resourceId: string;
        id: string;
        productId: string;
        mapType: 0 | 1 | 2;
        mapSourceType: string;
        defaultMapServerType: string;
        mapServerTypes: Array<string>;
        defaultLayerEffectConfig: string;
        layerEffectConfigs: Array<string>;
        clusterStyle: string;
        minPitch: number;
        maxPitch: number;
        pitchAngle: number;
        rotationAngle: number;
        center: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            address: string;
            zoom: number;
        };
        viewBox: {
            leftBottomView: {
                longitude: number;
                latitude: number;
            };
            rightUpView: {
                longitude: number;
                latitude: number;
            };
        };
        useFakeMapSdk: boolean;
        lowViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        middleViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        highViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        mapMaskEffect: {
            isShow: boolean;
            opacity: number;
        };
        areaBoundaryEffectConfig: {
            isShow: boolean;
            isCustomize: boolean;
            lowViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            middleViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            highViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            customViewDistrict: {
                minZoom: number;
                maxZoom: number;
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
        };
    }>;
    mapServerTypes: Array<{
        id: string;
        resourceId: string;
        name: string;
        coordinate: Array<number>;
        zoom: number;
        epsg: string;
        thumbnail: string;
    }>;
    mapTypeOverlays: Array<{
        id: string;
        name: string;
        typeId: string;
        resourceId: string;
        serviceType: string;
        url: string;
        isStandard: boolean;
        needProxy: boolean;
        proxyNetworkId: string;
        proxyIp: string;
        proxyPort: number;
        order: number;
        loadOptions: Record<string, any>;
    }>;
};

/**
 * @description 导入图层
 * @summary Request data types
 * @url [ post ] /api/Layers/import
 * @bizName geoDataBiz
 */
export type PostLayersImportReqTypeByGds = {
    'X-version'?: string;
    isReload?: boolean;
    layers?: Array<{
        id: string;
        number: string;
        name: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
        order: number;
    }>;
    layerConfigs?: Array<{
        id: string;
        productId: string;
        mapType: 0 | 1 | 2;
        name: string;
        path: string;
        layerIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        layerIconBackground: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        pointIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        clusterIcon: {
            iconType: 0 | 1 | 2;
            iconName: string;
            iconValue: string;
        };
        isChecked: boolean;
        isShow: boolean;
        isShowLabel: boolean;
        isShowAlert: boolean;
        zoom: {
            type: number;
            defaultZoom: Array<Record<string, any>>;
            customZoom: {
                minZoom: number;
                maxZoom: number;
            };
        };
        lowViewPointCluster: {
            selectType: number;
            value: string;
        };
        middleViewPointCluster: {
            selectType: number;
            value: string;
        };
        highViewPointCluster: {
            selectType: number;
            value: string;
        };
        customViewPointCluster: {
            selectType: number;
            value: string;
        };
        layerType: string;
        lineConfig: {
            color: string;
            opacity: number;
            width: number;
            isUseDataHeight: boolean;
            height: number;
            isDynamic: boolean;
            dynamicStyleUrl: string;
            dynamicSpeed: number;
            clampToGround: boolean;
            duration: number;
            lineType: string;
            dashLength: Array<number>;
            pattern: string;
            gapWidth: number;
            offset: number;
            blur: number;
            gradient: string;
            material: {
                polyLineGlowMaterialProperty: {
                    color: string;
                    glowPower: number;
                    taperPower: number;
                };
                polyLineOutlineMaterialProperty: {
                    color: string;
                    outlineColor: string;
                    outlineWidth: number;
                };
            };
            extension: Record<string, any>;
        };
        polygonConfig: {
            color: string;
            opacity: number;
            boundaryConfig: {
                isDisplay: boolean;
                color: string;
                width: number;
                opacity: number;
            };
            isUseDataHeight: boolean;
            height: number;
            extrusionHeight: number;
            fill: boolean;
            outline: boolean;
            outlineWidth: number;
            outlineColor: string;
            outlineColorOpacity: number;
            outlineHeight: number;
            colorFieldName: number;
            clampToGround: boolean;
            filterFieldName: string;
            filterFieldValue: string;
            fillImageUrl: string;
            antialias: boolean;
            pattern: string;
            translate: Array<number>;
            material: {
                colorMaterialProperty: {
                    color: string;
                };
                imageMaterialProperty: {
                    image: string;
                    color: string;
                    repeat: string;
                    transparent: boolean;
                };
                checkerboardMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: string;
                };
                stripeMaterialProperty: {
                    evenColor: string;
                    oddColor: string;
                    repeat: number;
                    offset: number;
                    orientation: string;
                };
                gridMaterialProperty: {
                    color: string;
                    cellAlpha: number;
                    lineCount: string;
                    lineThickness: string;
                    lineOffset: string;
                };
            };
        };
        areaConfig: {
            fill: boolean;
            fillColor: string;
            fillColorOpacity: number;
            extrudedHeight: number;
            clampToGround: boolean;
            lineColor: string;
            lineColorOpacity: number;
            isShowLine: boolean;
            lineWidth: number;
        };
        barConfig: {
            color: string;
            colorOpacity: number;
            clampToGround: boolean;
            radius: number;
            barHeight: number;
            entityHeight: number;
            isShowText: boolean;
            textConfig: {
                color: string;
                font: string;
                isShowBackground: boolean;
                background: string;
                backgroundOpacity: number;
                isShowLine: boolean;
                lineColor: string;
                lineWidth: number;
                scale: number;
            };
        };
        signageConfig: {
            image: boolean;
            color: string;
            opacity: boolean;
        };
        resourceId: string;
    }>;
    geoConfigs?: Array<{
        resourceId: string;
        id: string;
        productId: string;
        mapType: 0 | 1 | 2;
        mapSourceType: string;
        defaultMapServerType: string;
        mapServerTypes: Array<string>;
        defaultLayerEffectConfig: string;
        layerEffectConfigs: Array<string>;
        clusterStyle: string;
        minPitch: number;
        maxPitch: number;
        pitchAngle: number;
        rotationAngle: number;
        center: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            address: string;
            zoom: number;
        };
        viewBox: {
            leftBottomView: {
                longitude: number;
                latitude: number;
            };
            rightUpView: {
                longitude: number;
                latitude: number;
            };
        };
        useFakeMapSdk: boolean;
        lowViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        middleViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        highViewPoint: {
            zoom: {
                minZoom: number;
                maxZoom: number;
            };
            defaultZoom: number;
            defaultPitch: number;
        };
        mapMaskEffect: {
            isShow: boolean;
            opacity: number;
        };
        areaBoundaryEffectConfig: {
            isShow: boolean;
            isCustomize: boolean;
            lowViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            middleViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            highViewDistrict: {
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
            customViewDistrict: {
                minZoom: number;
                maxZoom: number;
                line: boolean;
                polygon: boolean;
                highlightPolygon: boolean;
            };
        };
    }>;
    mapServerTypes?: Array<{
        id: string;
        resourceId: string;
        name: string;
        coordinate: Array<number>;
        zoom: number;
        epsg: string;
        thumbnail: string;
    }>;
    mapTypeOverlays?: Array<{
        id: string;
        name: string;
        typeId: string;
        resourceId: string;
        serviceType: string;
        url: string;
        isStandard: boolean;
        needProxy: boolean;
        proxyNetworkId: string;
        proxyIp: string;
        proxyPort: number;
        order: number;
        loadOptions: Record<string, any>;
    }>;
};

/**
 * @description 获取图层集合包含图层配置数据（树结构）
 * @summary Request data types
 * @url [ get ] /api/Layers/tree
 * @bizName geoDataBiz
 */
export type GetLayersTreeReqTypeByGds = {
    ProductId: string;
    'X-version'?: string;
};

/**
 * @description 获取图层集合包含图层配置数据（树结构）
 * @summary Response data types
 * @url [ get ] /api/Layers/tree
 * @bizName geoDataBiz
 */
export type GetLayersTreeResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerConfig: {
            id: string;
            productId: string;
            name: string;
            path: string;
            layerIcon: {
                iconType: 0 | 1 | 2;
                iconName: string;
                iconValue: string;
            };
            layerIconBackground: {
                iconType: 0 | 1 | 2;
                iconName: string;
                iconValue: string;
            };
            isChecked: boolean;
            isShow: boolean;
            isShowLabel: boolean;
            isShowAlert: boolean;
            layerType: string;
            resourceId: string;
        };
        children: Array<Record<string, any>>;
        name: string;
        number: string;
        group: string;
        groupKey: string;
        productId: string;
        isDeepestNode: boolean;
        path: string;
        layerId: string;
    }>;
};

/**
 * @description 获取图层集合（树结构，包含选中状态）
 * @summary Request data types
 * @url [ post ] /api/Layers/tree/status
 * @bizName geoDataBiz
 */
export type PostLayersTreeStatusReqTypeByGds = {
    'X-version'?: string;
    selectIds?: Array<string>;
    productId: string;
};

/**
 * @description 获取图层集合（树结构，包含选中状态）
 * @summary Response data types
 * @url [ post ] /api/Layers/tree/status
 * @bizName geoDataBiz
 */
export type PostLayersTreeStatusResTypeByGds = {
    totalCount: number;
    records: Array<{
        children: Array<Record<string, any>>;
        useStatus: 0 | 1 | 2;
        name: string;
        number: string;
        group: string;
        groupKey: string;
        productId: string;
        isDeepestNode: boolean;
        path: string;
        layerId: string;
    }>;
};

/**
 * @description 获取图层集合包含图层配置数据(平铺结构)
 * @summary Request data types
 * @url [ get ] /api/Layers
 * @bizName geoDataBiz
 */
export type GetLayersReqTypeByGds = {
    ProductId: string;
    'X-version'?: string;
};

/**
 * @description 获取图层集合包含图层配置数据(平铺结构)
 * @summary Response data types
 * @url [ get ] /api/Layers
 * @bizName geoDataBiz
 */
export type GetLayersResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerConfig: {
            id: string;
            productId: string;
            name: string;
            path: string;
            parentId: string;
            group: string;
            groupKey: string;
            layerIcon: {
                iconType: 0 | 1 | 2;
                iconName: string;
                iconValue: string;
            };
            layerIconBackground: {
                iconType: 0 | 1 | 2;
                iconName: string;
                iconValue: string;
            };
            pointIcon: {
                iconType: 0 | 1 | 2;
                iconName: string;
                iconValue: string;
            };
            clusterIcon: {
                iconType: 0 | 1 | 2;
                iconName: string;
                iconValue: string;
            };
            isChecked: boolean;
            isShow: boolean;
            isShowLabel: boolean;
            isShowAlert: boolean;
            hasChildren: boolean;
            zoom: {
                type: number;
                defaultZoom: {
                    lowViewPoint: {
                        zoom: {
                            minZoom: number;
                            maxZoom: number;
                        };
                        defaultZoom: number;
                        defaultPitch: number;
                    };
                    middleViewPoint: {
                        zoom: {
                            minZoom: number;
                            maxZoom: number;
                        };
                        defaultZoom: number;
                        defaultPitch: number;
                    };
                    highViewPoint: {
                        zoom: {
                            minZoom: number;
                            maxZoom: number;
                        };
                        defaultZoom: number;
                        defaultPitch: number;
                    };
                };
                customZoom: {
                    minZoom: number;
                    maxZoom: number;
                };
            };
            lowViewPointCluster: {
                selectType: number;
                value: string;
            };
            middleViewPointCluster: {
                selectType: number;
                value: string;
            };
            highViewPointCluster: {
                selectType: number;
                value: string;
            };
            customViewPointCluster: {
                selectType: number;
                value: string;
            };
            layerType: string;
            lineConfig: {
                color: string;
                opacity: number;
                width: number;
                isUseDataHeight: boolean;
                height: number;
                isDynamic: boolean;
                dynamicStyleUrl: string;
                dynamicSpeed: number;
                clampToGround: boolean;
                duration: number;
                lineType: string;
                dashLength: Array<number>;
                pattern: string;
                gapWidth: number;
                offset: number;
                blur: number;
                gradient: string;
                material: {
                    polyLineGlowMaterialProperty: {
                        color: string;
                        glowPower: number;
                        taperPower: number;
                    };
                    polyLineOutlineMaterialProperty: {
                        color: string;
                        outlineColor: string;
                        outlineWidth: number;
                    };
                };
                extension: Record<string, any>;
            };
            polygonConfig: {
                color: string;
                opacity: number;
                boundaryConfig: {
                    isDisplay: boolean;
                    color: string;
                    width: number;
                    opacity: number;
                };
                isUseDataHeight: boolean;
                height: number;
                extrusionHeight: number;
                fill: boolean;
                outline: boolean;
                outlineWidth: number;
                outlineColor: string;
                outlineColorOpacity: number;
                outlineHeight: number;
                colorFieldName: number;
                clampToGround: boolean;
                filterFieldName: string;
                filterFieldValue: string;
                fillImageUrl: string;
                antialias: boolean;
                pattern: string;
                translate: Array<number>;
                material: {
                    colorMaterialProperty: {
                        color: string;
                    };
                    imageMaterialProperty: {
                        image: string;
                        color: string;
                        repeat: string;
                        transparent: boolean;
                    };
                    checkerboardMaterialProperty: {
                        evenColor: string;
                        oddColor: string;
                        repeat: string;
                    };
                    stripeMaterialProperty: {
                        evenColor: string;
                        oddColor: string;
                        repeat: number;
                        offset: number;
                        orientation: string;
                    };
                    gridMaterialProperty: {
                        color: string;
                        cellAlpha: number;
                        lineCount: string;
                        lineThickness: string;
                        lineOffset: string;
                    };
                };
            };
            areaConfig: {
                fill: boolean;
                fillColor: string;
                fillColorOpacity: number;
                extrudedHeight: number;
                clampToGround: boolean;
                lineColor: string;
                lineColorOpacity: number;
                isShowLine: boolean;
                lineWidth: number;
            };
            barConfig: {
                color: string;
                colorOpacity: number;
                clampToGround: boolean;
                radius: number;
                barHeight: number;
                entityHeight: number;
                isShowText: boolean;
                textConfig: {
                    color: string;
                    font: string;
                    isShowBackground: boolean;
                    background: string;
                    backgroundOpacity: number;
                    isShowLine: boolean;
                    lineColor: string;
                    lineWidth: number;
                    scale: number;
                };
            };
            signageConfig: {
                image: boolean;
                color: string;
                opacity: boolean;
            };
        };
        name: string;
        number: string;
        group: string;
        groupKey: string;
        productId: string;
        isDeepestNode: boolean;
        path: string;
        layerId: string;
    }>;
};

/**
 * @description Id获取地图中心点
 * @summary Request data types
 * @url [ get ] /api/MapCenters/{id}
 * @bizName geoDataBiz
 */
export type GetMapCentersIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description Id获取地图中心点
 * @summary Response data types
 * @url [ get ] /api/MapCenters/{id}
 * @bizName geoDataBiz
 */
export type GetMapCentersIdResTypeByGds = {
    id: string;
    productId: string;
    areaCode: string;
    areaCodeName: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    address: string;
    zoom: number;
};

/**
 * @description 修改地图中心点
 * @summary Request data types
 * @url [ put ] /api/MapCenters/{id}
 * @bizName geoDataBiz
 */
export type PutMapCentersIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    productId?: string;
    areaCode?: string;
    areaCodeName?: string;
    coordinate?: {
        longitude: number;
        latitude: number;
    };
    address?: string;
    zoom?: number;
};

/**
 * @description 根据Id删除中心点配置
 * @summary Request data types
 * @url [ delete ] /api/MapCenters/{id}
 * @bizName geoDataBiz
 */
export type DeleteMapCentersIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description ProductId分页获取地图中心点集合
 * @summary Request data types
 * @url [ get ] /api/MapCenters
 * @bizName geoDataBiz
 */
export type GetMapCentersReqTypeByGds = {
    ProductId?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description ProductId分页获取地图中心点集合
 * @summary Response data types
 * @url [ get ] /api/MapCenters
 * @bizName geoDataBiz
 */
export type GetMapCentersResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        productId: string;
        areaCode: string;
        areaCodeName: string;
        coordinate: {
            longitude: number;
            latitude: number;
        };
        address: string;
        zoom: number;
    }>;
};

/**
 * @description 创建地图中心点
 * @summary Request data types
 * @url [ post ] /api/MapCenters
 * @bizName geoDataBiz
 */
export type PostMapCentersReqTypeByGds = {
    'X-version'?: string;
    productId?: string;
    areaCode?: string;
    areaCodeName?: string;
    coordinate?: {
        longitude: number;
        latitude: number;
    };
    address?: string;
    zoom?: number;
};

/**
 * @description 创建地图中心点
 * @summary Response data types
 * @url [ post ] /api/MapCenters
 * @bizName geoDataBiz
 */
export type PostMapCentersResTypeByGds = {
    id: string;
    productId: string;
    areaCode: string;
    areaCodeName: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    address: string;
    zoom: number;
};

/**
 * @description 开启/关闭中心点配置
 * @summary Request data types
 * @url [ put ] /api/MapCenters/switch
 * @bizName geoDataBiz
 */
export type PutMapCentersSwitchReqTypeByGds = {
    'X-version'?: string;
    productId?: string;
    isOpen?: boolean;
};

/**
 * @description 查询地图服务类型
 * @summary Request data types
 * @url [ get ] /api/MapServerTypes/{id}
 * @bizName geoDataBiz
 */
export type GetMapServerTypesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询地图服务类型
 * @summary Response data types
 * @url [ get ] /api/MapServerTypes/{id}
 * @bizName geoDataBiz
 */
export type GetMapServerTypesIdResTypeByGds = {
    id: string;
    resourceId: string;
    name: string;
    coordinate: Array<number>;
    zoom: number;
    epsg: string;
    thumbnail: string;
};

/**
 * @description 修改地图服务类型
 * @summary Request data types
 * @url [ put ] /api/MapServerTypes/{id}
 * @bizName geoDataBiz
 */
export type PutMapServerTypesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    coordinate?: Array<number>;
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * @description 删除地图服务类型
 * @summary Request data types
 * @url [ delete ] /api/MapServerTypes/{id}
 * @bizName geoDataBiz
 */
export type DeleteMapServerTypesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 添加地图服务类型
 * @summary Request data types
 * @url [ post ] /api/MapServerTypes
 * @bizName geoDataBiz
 */
export type PostMapServerTypesReqTypeByGds = {
    'X-version'?: string;
    resourceId?: string;
    name?: string;
    coordinate?: Array<number>;
    zoom?: number;
    epsg?: string;
    thumbnail?: string;
};

/**
 * @description 添加地图服务类型
 * @summary Response data types
 * @url [ post ] /api/MapServerTypes
 * @bizName geoDataBiz
 */
export type PostMapServerTypesResTypeByGds = {
    id: string;
    resourceId: string;
    name: string;
    coordinate: Array<number>;
    zoom: number;
    epsg: string;
    thumbnail: string;
};

/**
 * @description 分页查询地图服务类型集合
 * @summary Request data types
 * @url [ get ] /api/MapServerTypes
 * @bizName geoDataBiz
 */
export type GetMapServerTypesReqTypeByGds = {
    ReturnThumbnail?: boolean;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 分页查询地图服务类型集合
 * @summary Response data types
 * @url [ get ] /api/MapServerTypes
 * @bizName geoDataBiz
 */
export type GetMapServerTypesResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        name: string;
        coordinate: Array<number>;
        zoom: number;
        epsg: string;
        thumbnail: string;
    }>;
};

/**
 * @description 根据id分页查询地图服务底图图层集合
 * @summary Request data types
 * @url [ get ] /api/MapServerTypes/{id}/overlays
 * @bizName geoDataBiz
 */
export type GetMapServerTypesIdOverlaysReqTypeByGds = {
    id: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 根据id分页查询地图服务底图图层集合
 * @summary Response data types
 * @url [ get ] /api/MapServerTypes/{id}/overlays
 * @bizName geoDataBiz
 */
export type GetMapServerTypesIdOverlaysResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        name: string;
        typeId: string;
        resourceId: string;
        serviceType: string;
        url: string;
        urlFormat: string;
        isStandard: boolean;
        needProxy: boolean;
        proxyNetworkId: string;
        proxyIp: string;
        proxyPort: number;
        order: number;
        loadOptions: Record<string, any>;
    }>;
};

/**
 * @description 查询地图服务底图图层
 * @summary Request data types
 * @url [ get ] /api/MapTypeOverlays/{id}
 * @bizName geoDataBiz
 */
export type GetMapTypeOverlaysIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查询地图服务底图图层
 * @summary Response data types
 * @url [ get ] /api/MapTypeOverlays/{id}
 * @bizName geoDataBiz
 */
export type GetMapTypeOverlaysIdResTypeByGds = {
    id: string;
    name: string;
    typeId: string;
    resourceId: string;
    serviceType: string;
    url: string;
    urlFormat: string;
    isStandard: boolean;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    order: number;
    loadOptions: Record<string, any>;
};

/**
 * @description 修改地图服务底图图层
 * @summary Request data types
 * @url [ put ] /api/MapTypeOverlays/{id}
 * @bizName geoDataBiz
 */
export type PutMapTypeOverlaysIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: Record<string, any>;
};

/**
 * @description 添加地图服务底图图层
 * @summary Request data types
 * @url [ post ] /api/MapTypeOverlays
 * @bizName geoDataBiz
 */
export type PostMapTypeOverlaysReqTypeByGds = {
    'X-version'?: string;
    name?: string;
    typeId?: string;
    resourceId?: string;
    serviceType?: string;
    url?: string;
    isStandard?: boolean;
    needProxy?: boolean;
    proxyNetworkId?: string;
    proxyIp?: string;
    proxyPort?: number;
    order?: number;
    loadOptions?: Record<string, any>;
};

/**
 * @description 添加地图服务底图图层
 * @summary Response data types
 * @url [ post ] /api/MapTypeOverlays
 * @bizName geoDataBiz
 */
export type PostMapTypeOverlaysResTypeByGds = {
    id: string;
    name: string;
    typeId: string;
    resourceId: string;
    serviceType: string;
    url: string;
    urlFormat: string;
    isStandard: boolean;
    needProxy: boolean;
    proxyNetworkId: string;
    proxyIp: string;
    proxyPort: number;
    order: number;
    loadOptions: Record<string, any>;
};

/**
 * @description 批量删除地图服务底图图层
 * @summary Request data types
 * @url [ delete ] /api/MapTypeOverlays
 * @bizName geoDataBiz
 */
export type DeleteMapTypeOverlaysReqTypeByGds = {
    'X-version'?: string;
    ids: Array<string>;
};

/**
 * @description 获取地图服务转换后的地址
 * @summary Request data types
 * @url [ get ] /api/MapTypeOverlays/format/url
 * @bizName geoDataBiz
 */
export type GetMapTypeOverlaysFormatUrlReqTypeByGds = {
    Url: string;
    NeedProxy?: boolean;
    ProxyIp?: string;
    ProxyPort?: number;
    'X-version'?: string;
};

/**
 * @description 获取地图服务转换后的地址
 * @summary Response data types
 * @url [ get ] /api/MapTypeOverlays/format/url
 * @bizName geoDataBiz
 */
export type GetMapTypeOverlaysFormatUrlResTypeByGds = {
    urlFormat: string;
};

/**
 * @description 根据标绘id查找标绘
 * @summary Request data types
 * @url [ get ] /api/Plots/{id}
 * @bizName geoDataBiz
 */
export type GetPlotsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据标绘id查找标绘
 * @summary Response data types
 * @url [ get ] /api/Plots/{id}
 * @bizName geoDataBiz
 */
export type GetPlotsIdResTypeByGds = {
    id: string;
    associatedId: string;
    plotAssociatedType: 0 | 1 | 2;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * @description 根据标绘id修改标绘
 * @summary Request data types
 * @url [ put ] /api/Plots/{id}
 * @bizName geoDataBiz
 */
export type PutPlotsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    type?: string;
    properties?: Record<string, any>;
    geometry?: Record<string, any>;
};

/**
 * @description 根据标绘id删除标绘
 * @summary Request data types
 * @url [ delete ] /api/Plots/{id}
 * @bizName geoDataBiz
 */
export type DeletePlotsIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查找事件标绘
 * @summary Request data types
 * @url [ get ] /api/Plots/event
 * @bizName geoDataBiz
 */
export type GetPlotsEventReqTypeByGds = {
    EventId: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查找事件标绘
 * @summary Response data types
 * @url [ get ] /api/Plots/event
 * @bizName geoDataBiz
 */
export type GetPlotsEventResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        associatedId: string;
        plotAssociatedType: 0 | 1 | 2;
        type: string;
        properties: string;
        geometry: string;
    }>;
};

/**
 * @description 添加事件标绘
 * @summary Request data types
 * @url [ post ] /api/Plots/event
 * @bizName geoDataBiz
 */
export type PostPlotsEventReqTypeByGds = {
    'X-version'?: string;
    eventId: string;
    id?: string;
    type?: string;
    properties?: Record<string, any>;
    geometry?: Record<string, any>;
};

/**
 * @description 添加事件标绘
 * @summary Response data types
 * @url [ post ] /api/Plots/event
 * @bizName geoDataBiz
 */
export type PostPlotsEventResTypeByGds = {
    id: string;
    associatedId: string;
    plotAssociatedType: 0 | 1 | 2;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * @description 查找用户标绘
 * @summary Request data types
 * @url [ get ] /api/Plots/user
 * @bizName geoDataBiz
 */
export type GetPlotsUserReqTypeByGds = {
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查找用户标绘
 * @summary Response data types
 * @url [ get ] /api/Plots/user
 * @bizName geoDataBiz
 */
export type GetPlotsUserResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        associatedId: string;
        plotAssociatedType: 0 | 1 | 2;
        type: string;
        properties: string;
        geometry: string;
    }>;
};

/**
 * @description 添加用户标绘
 * @summary Request data types
 * @url [ post ] /api/Plots/user
 * @bizName geoDataBiz
 */
export type PostPlotsUserReqTypeByGds = {
    'X-version'?: string;
    id?: string;
    type?: string;
    properties?: Record<string, any>;
    geometry?: Record<string, any>;
};

/**
 * @description 添加用户标绘
 * @summary Response data types
 * @url [ post ] /api/Plots/user
 * @bizName geoDataBiz
 */
export type PostPlotsUserResTypeByGds = {
    id: string;
    associatedId: string;
    plotAssociatedType: 0 | 1 | 2;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * @description 查找标绘
 * @summary Request data types
 * @url [ get ] /api/Plots
 * @bizName geoDataBiz
 */
export type GetPlotsReqTypeByGds = {
    AssociatedId: string;
    PlotAssociatedType: number;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 查找标绘
 * @summary Response data types
 * @url [ get ] /api/Plots
 * @bizName geoDataBiz
 */
export type GetPlotsResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        associatedId: string;
        plotAssociatedType: 0 | 1 | 2;
        type: string;
        properties: string;
        geometry: string;
    }>;
};

/**
 * @description 添加标绘
 * @summary Request data types
 * @url [ post ] /api/Plots
 * @bizName geoDataBiz
 */
export type PostPlotsReqTypeByGds = {
    'X-version'?: string;
    associatedId: string;
    plotAssociatedType?: 0 | 1 | 2;
    id?: string;
    type?: string;
    properties?: Record<string, any>;
    geometry?: Record<string, any>;
};

/**
 * @description 添加标绘
 * @summary Response data types
 * @url [ post ] /api/Plots
 * @bizName geoDataBiz
 */
export type PostPlotsResTypeByGds = {
    id: string;
    associatedId: string;
    plotAssociatedType: 0 | 1 | 2;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * @description 根据id查找用户常用标绘类型
 * @summary Request data types
 * @url [ get ] /api/PlotTypes/{id}
 * @bizName geoDataBiz
 */
export type GetPlotTypesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据id查找用户常用标绘类型
 * @summary Response data types
 * @url [ get ] /api/PlotTypes/{id}
 * @bizName geoDataBiz
 */
export type GetPlotTypesIdResTypeByGds = {
    id: string;
    type: string;
    name: string;
    dirName: string;
    fileName: string;
    editType: string;
    userId: string;
};

/**
 * @description 根据id删除标绘类型
 * @summary Request data types
 * @url [ delete ] /api/PlotTypes/{id}
 * @bizName geoDataBiz
 */
export type DeletePlotTypesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 查找用户常用标绘类型
 * @summary Request data types
 * @url [ get ] /api/PlotTypes/user
 * @bizName geoDataBiz
 */
export type GetPlotTypesUserReqTypeByGds = {
    'X-version'?: string;
};

/**
 * @description 查找用户常用标绘类型
 * @summary Response data types
 * @url [ get ] /api/PlotTypes/user
 * @bizName geoDataBiz
 */
export type GetPlotTypesUserResTypeByGds = {
    totalCount: number;
    userId: string;
    plotTypes: Array<{
        id: string;
        type: string;
        name: string;
        dirName: string;
        fileName: string;
        editType: string;
    }>;
};

/**
 * @description 添加用户常用标绘类型
 * @summary Request data types
 * @url [ post ] /api/PlotTypes/user
 * @bizName geoDataBiz
 */
export type PostPlotTypesUserReqTypeByGds = {
    'X-version'?: string;
    id?: string;
    type?: string;
    name?: string;
    dirName?: string;
    fileName?: string;
    editType?: string;
};

/**
 * @description 添加用户常用标绘类型
 * @summary Response data types
 * @url [ post ] /api/PlotTypes/user
 * @bizName geoDataBiz
 */
export type PostPlotTypesUserResTypeByGds = {
    id: string;
    associatedId: string;
    plotAssociatedType: 0 | 1 | 2;
    type: string;
    properties: string;
    geometry: string;
};

/**
 * @description 添加模型场景
 * @summary Request data types
 * @url [ post ] /api/Scenes
 * @bizName geoDataBiz
 */
export type PostScenesReqTypeByGds = {
    'X-version'?: string;
    resourceId?: string;
    facilityId?: string;
    areaCode?: string;
    name?: string;
    sceneName?: string;
    isIndoorScene?: boolean;
    showModelList?: Array<string>;
    cameraOption?: {
        center: Array<number>;
        bearing: number;
        pitch: number;
        zoom: number;
    };
};

/**
 * @description 添加模型场景
 * @summary Response data types
 * @url [ post ] /api/Scenes
 * @bizName geoDataBiz
 */
export type PostScenesResTypeByGds = {
    id: string;
    resourceId: string;
    facilityId: string;
    areaCode: string;
    name: string;
    sceneName: string;
    isIndoorScene: boolean;
    showModelList: Array<string>;
    cameraOption: {
        center: Array<number>;
        bearing: number;
        pitch: number;
        zoom: number;
    };
};

/**
 * @description 修改模型场景
 * @summary Request data types
 * @url [ put ] /api/Scenes/{id}
 * @bizName geoDataBiz
 */
export type PutScenesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
    resourceId?: string;
    facilityId?: string;
    areaCode?: string;
    name?: string;
    sceneName?: string;
    isIndoorScene?: boolean;
    showModelList?: Array<string>;
    cameraOption?: {
        center: Array<number>;
        bearing: number;
        pitch: number;
        zoom: number;
    };
};

/**
 * @description 删除模型场景
 * @summary Request data types
 * @url [ delete ] /api/Scenes/{id}
 * @bizName geoDataBiz
 */
export type DeleteScenesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据id查询模型场景
 * @summary Request data types
 * @url [ get ] /api/Scenes/{id}
 * @bizName geoDataBiz
 */
export type GetScenesIdReqTypeByGds = {
    id: string;
    'X-version'?: string;
};

/**
 * @description 根据id查询模型场景
 * @summary Response data types
 * @url [ get ] /api/Scenes/{id}
 * @bizName geoDataBiz
 */
export type GetScenesIdResTypeByGds = {
    id: string;
    resourceId: string;
    facilityId: string;
    areaCode: string;
    name: string;
    sceneName: string;
    isIndoorScene: boolean;
    showModelList: Array<string>;
    cameraOption: {
        center: Array<number>;
        bearing: number;
        pitch: number;
        zoom: number;
    };
};

/**
 * @description 通过区域码获取模型场景
 * @summary Request data types
 * @url [ get ] /api/Scenes/areaCode
 * @bizName geoDataBiz
 */
export type GetScenesAreaCodeReqTypeByGds = {
    areaCode: string;
    'X-version'?: string;
};

/**
 * @description 通过区域码获取模型场景
 * @summary Response data types
 * @url [ get ] /api/Scenes/areaCode
 * @bizName geoDataBiz
 */
export type GetScenesAreaCodeResTypeByGds = {
    id: string;
    resourceId: string;
    facilityId: string;
    areaCode: string;
    name: string;
    sceneName: string;
    isIndoorScene: boolean;
    showModelList: Array<string>;
    cameraOption: {
        center: Array<number>;
        bearing: number;
        pitch: number;
        zoom: number;
    };
};

/**
 * @description 多条件查询模型场景
 * @summary Request data types
 * @url [ get ] /api/Scenes/search
 * @bizName geoDataBiz
 */
export type GetScenesSearchReqTypeByGds = {
    Keyword?: string;
    page?: number;
    per_page?: number;
    'X-version'?: string;
};

/**
 * @description 多条件查询模型场景
 * @summary Response data types
 * @url [ get ] /api/Scenes/search
 * @bizName geoDataBiz
 */
export type GetScenesSearchResTypeByGds = {
    totalCount: number;
    records: Array<{
        id: string;
        resourceId: string;
        facilityId: string;
        areaCode: string;
        name: string;
        sceneName: string;
        isIndoorScene: boolean;
        showModelList: Array<string>;
        cameraOption: {
            center: Array<number>;
            bearing: number;
            pitch: number;
            zoom: number;
        };
    }>;
};

/**
 * @description 获取图层的统计数据
 * @summary Request data types
 * @url [ get ] /api/Statistical/layers
 * @bizName geoDataBiz
 */
export type GetStatisticalLayersReqTypeByGds = {
    LayerName: string;
    AreaCode?: string;
    ProductId?: string;
    PrefixAreaCodes?: Array<string>;
    'X-version'?: string;
};

/**
 * @description 获取图层的统计数据
 * @summary Response data types
 * @url [ get ] /api/Statistical/layers
 * @bizName geoDataBiz
 */
export type GetStatisticalLayersResTypeByGds = {
    totalCount: number;
    records: Array<{
        facilityAmount: number;
        id: string;
        name: string;
        number: string;
        description: string;
        iconUrl: string;
        group: string;
        groupKey: string;
        productId: string;
    }>;
};

/**
 * @description 根据根图层查询下级图层及设施统计
 * @summary Request data types
 * @url [ post ] /api/Statistical/layers/tree
 * @bizName geoDataBiz
 */
export type PostStatisticalLayersTreeReqTypeByGds = {
    'X-version'?: string;
    rootLayerName: string;
    keyword?: string;
    productId?: string;
    prefixAreaCodes?: Array<string>;
};

/**
 * @description 根据根图层查询下级图层及设施统计
 * @summary Response data types
 * @url [ post ] /api/Statistical/layers/tree
 * @bizName geoDataBiz
 */
export type PostStatisticalLayersTreeResTypeByGds = {
    layerId: string;
    layerName: string;
    subordinateLayersTotal: number;
    facilitiesTotal: number;
    subordinateLayers: Array<{
        layerId: string;
        layerName: string;
        subordinateLayersTotal: number;
        facilitiesTotal: number;
        subordinateLayers: Array<Record<string, any>>;
    }>;
};

/**
 * @description 根据区域和图层查询设施统计
 * @summary Request data types
 * @url [ post ] /api/Statistical/area_query
 * @bizName geoDataBiz
 */
export type PostStatisticalAreaQueryReqTypeByGds = {
    'X-version'?: string;
    layerIds: Array<string>;
    upLeft: {
        longitude: number;
        latitude: number;
    };
    bottomRight: {
        longitude: number;
        latitude: number;
    };
};

/**
 * @description 根据区域和图层查询设施统计
 * @summary Response data types
 * @url [ post ] /api/Statistical/area_query
 * @bizName geoDataBiz
 */
export type PostStatisticalAreaQueryResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerId: string;
        totalCount: number;
    }>;
};

/**
 * @description 根据圆形区域图层统计设施
 * @summary Request data types
 * @url [ post ] /api/Statistical/circle_area
 * @bizName geoDataBiz
 */
export type PostStatisticalCircleAreaReqTypeByGds = {
    'X-version'?: string;
    layerIds: Array<string>;
    center: {
        longitude: number;
        latitude: number;
    };
    radius: number;
};

/**
 * @description 根据圆形区域图层统计设施
 * @summary Response data types
 * @url [ post ] /api/Statistical/circle_area
 * @bizName geoDataBiz
 */
export type PostStatisticalCircleAreaResTypeByGds = {
    totalCount: number;
    records: Array<{
        layerId: string;
        totalCount: number;
    }>;
};
