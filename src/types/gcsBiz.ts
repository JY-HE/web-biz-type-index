/**
 * @description 上报GPS点位
 * @summary Request data types
 * @url [ put ] /api/active_gps/{device}
 * @bizName gcsBiz
 */
export type PutActiveGpsDeviceReqTypeByGcs = {
    device: string;
    coordinate: {
        longitude: number;
        latitude: number;
    };
    metersPerSecond: number;
    direction: number;
    altitude: number;
    address?: string;
    reportTime?: string;
    sourceCoordinateType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    uploadSourceType?: number;
};

/**
 * @description 查询可视区域内的设备活跃点
 * @summary Request data types
 * @url [ get ] /api/active_gps
 * @bizName gcsBiz
 */
export type GetActiveGpsReqTypeByGcs = {
    'up_left.longitude'?: number;
    'up_left.latitude'?: number;
    up_left?: {
        longitude: number;
        latitude: number;
    };
    'bottom_right.longitude'?: number;
    'bottom_right.latitude'?: number;
    bottom_right?: {
        longitude: number;
        latitude: number;
    };
    page?: number;
    per_page?: number;
};

/**
 * @description 查询可视区域内的设备活跃点
 * @summary Response data types
 * @url [ get ] /api/active_gps
 * @bizName gcsBiz
 */
export type GetActiveGpsResTypeByGcs = {
    totalCount: number;
    items: Array<{
        deviceId: string;
        gps: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            metersPerSecond: number;
            direction: number;
            altitude: number;
            address: string;
        };
        reportTime: string;
        uploadSourceType: number;
    }>;
};

/**
 * @description 查询指定设备的最新活跃点位
 * @summary Request data types
 * @url [ get ] /api/active_gps/{device}/latest
 * @bizName gcsBiz
 */
export type GetActiveGpsDeviceLatestReqTypeByGcs = {
    device: string;
    upload_source_type?: number;
};

/**
 * @description 查询指定设备的最新活跃点位
 * @summary Response data types
 * @url [ get ] /api/active_gps/{device}/latest
 * @bizName gcsBiz
 */
export type GetActiveGpsDeviceLatestResTypeByGcs = {
    deviceId: string;
    gps: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        metersPerSecond: number;
        direction: number;
        altitude: number;
        address: string;
    };
    reportTime: string;
    uploadSourceType: number;
};

/**
 * @description 查询多个指定设备的最新活跃点位
 * @summary Request data types
 * @url [ get ] /api/active_gps/devices/latest
 * @bizName gcsBiz
 */
export type GetActiveGpsDevicesLatestReqTypeByGcs = {
    Devices?: string;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询多个指定设备的最新活跃点位
 * @summary Response data types
 * @url [ get ] /api/active_gps/devices/latest
 * @bizName gcsBiz
 */
export type GetActiveGpsDevicesLatestResTypeByGcs = {
    totalCount: number;
    items: Array<{
        deviceId: string;
        gps: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            metersPerSecond: number;
            direction: number;
            altitude: number;
            address: string;
        };
        reportTime: string;
        uploadSourceType: number;
    }>;
};

/**
 * @description 获取设备最后的Gps点位
 * @summary Request data types
 * @url [ get ] /api/history_gps/{device}/latest
 * @bizName gcsBiz
 */
export type GetHistoryGpsDeviceLatestReqTypeByGcs = {
    device: string;
    day_intervals?: number;
    upload_source_type?: number;
};

/**
 * @description 获取设备最后的Gps点位
 * @summary Response data types
 * @url [ get ] /api/history_gps/{device}/latest
 * @bizName gcsBiz
 */
export type GetHistoryGpsDeviceLatestResTypeByGcs = {
    deviceId: string;
    gps: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        metersPerSecond: number;
        direction: number;
        altitude: number;
        address: string;
    };
    reportTime: string;
    uploadSourceType: number;
};

/**
 * @description 查询设备GPS历史轨迹
 * @summary Request data types
 * @url [ get ] /api/history_gps/{device}
 * @bizName gcsBiz
 */
export type GetHistoryGpsDeviceReqTypeByGcs = {
    device: string;
    start_time: string;
    end_time: string;
    upload_source_type?: number;
    dilution_factor?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询设备GPS历史轨迹
 * @summary Response data types
 * @url [ get ] /api/history_gps/{device}
 * @bizName gcsBiz
 */
export type GetHistoryGpsDeviceResTypeByGcs = {
    totalCount: number;
    items: Array<{
        deviceId: string;
        gps: {
            coordinate: {
                longitude: number;
                latitude: number;
            };
            metersPerSecond: number;
            direction: number;
            altitude: number;
            address: string;
        };
        reportTime: string;
        uploadSourceType: number;
    }>;
};

/**
 * @description 查询某区域在某个时段内的所有途经设备
 * @summary Request data types
 * @url [ get ] /api/history_gps
 * @bizName gcsBiz
 */
export type GetHistoryGpsReqTypeByGcs = {
    'up_left.Longitude'?: number;
    'up_left.Latitude'?: number;
    up_left?: {
        Longitude: number;
        Latitude: number;
    };
    'bottom_right.Longitude'?: number;
    'bottom_right.Latitude'?: number;
    bottom_right?: {
        Longitude: number;
        Latitude: number;
    };
    start_time: string;
    minute_intervals?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询某区域在某个时段内的所有途经设备
 * @summary Response data types
 * @url [ get ] /api/history_gps
 * @bizName gcsBiz
 */
export type GetHistoryGpsResTypeByGcs = {
    totalCount: number;
    items: Array<string>;
};

/**
 * @description 历史点补全
 * @summary Request data types
 * @url [ put ] /api/history_gps
 * @bizName gcsBiz
 */
export type PutHistoryGpsReqTypeByGcs = {
    deviceId: string;
    gps: {
        coordinate: {
            longitude: number;
            latitude: number;
        };
        metersPerSecond: number;
        direction: number;
        altitude: number;
        address: string;
    };
    historyTime: string;
    currentTime: string;
    uploadSourceType?: number;
};

/**
 * @description 查询某区域在某个时段内的所有途经设备（返回设备Id带类型）
 * @summary Request data types
 * @url [ get ] /api/history_gps/devices
 * @bizName gcsBiz
 */
export type GetHistoryGpsDevicesReqTypeByGcs = {
    'up_left.Longitude'?: number;
    'up_left.Latitude'?: number;
    up_left?: {
        Longitude: number;
        Latitude: number;
    };
    'bottom_right.Longitude'?: number;
    'bottom_right.Latitude'?: number;
    bottom_right?: {
        Longitude: number;
        Latitude: number;
    };
    start_time: string;
    minute_intervals?: number;
    page?: number;
    per_page?: number;
};

/**
 * @description 查询某区域在某个时段内的所有途经设备（返回设备Id带类型）
 * @summary Response data types
 * @url [ get ] /api/history_gps/devices
 * @bizName gcsBiz
 */
export type GetHistoryGpsDevicesResTypeByGcs = {
    totalCount: number;
    items: Array<{
        deviceId: string;
        uploadSourceType: number;
    }>;
};
