import {getDashboardSummary, getActivityFeed} from './dashboard.service.js';
import ApiResponse from '../../utils/ApiResponse.js';

export const handleGetSummary = async (req, res, next) => {
  try {
    const result = await getDashboardSummary(req.user.id);
    res.status(200).json(new ApiResponse(200, result, 'Dashbaord summary calculate successfully'));
  } catch (error) {
    next(error);
  }
};

export const handleGetActivity = async (req, res, next) => {
  try {
    const result = await getActivityFeed(req.user.id);
    res.status(200).json(new ApiResponse(200, result, 'Activity feed retrived successfully'));
  } catch(error) {
    next(error);
  }
};