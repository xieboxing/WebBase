/**
 * 统一 API 响应格式
 */
export interface ApiResponse<T = unknown> {
  /** 是否成功 */
  success: boolean;
  /** 响应数据 */
  data: T;
  /** 错误信息 */
  message?: string;
  /** 错误代码 */
  errorCode?: string;
  /** 时间戳 */
  timestamp?: string;
}

/**
 * 分页响应
 */
export interface PaginatedResponse<T> {
  /** 数据列表 */
  data: T[];
  /** 总数量 */
  total: number;
  /** 当前页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 总页数 */
  totalPages: number;
}

/**
 * 分页请求参数
 */
export interface PaginationParams {
  /** 页码（从 1 开始） */
  page?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 排序字段 */
  sortBy?: string;
  /** 排序方向 */
  sortOrder?: 'asc' | 'desc';
}

/**
 * API 错误响应
 */
export interface ApiErrorResponse {
  /** 错误信息 */
  message: string;
  /** 错误代码 */
  errorCode?: string;
  /** 详细错误 */
  errors?: Record<string, string[]>;
}

/**
 * 列表查询参数
 */
export interface ListQueryParams extends PaginationParams {
  /** 搜索关键词 */
  search?: string;
  /** 筛选条件 */
  filters?: Record<string, unknown>;
}