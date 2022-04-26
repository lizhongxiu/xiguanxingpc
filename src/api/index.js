// 引入各种业务的js
import system from "./system.js"; // 系统管理
import user from "./user.js"; // 系统管理
import teenager from "./teenager.js"; // 方案管理
import operation from "./operation.js"; // 激励管理
import Common from "./common/index.js"; // 运营管理
import after from "./after.js"; // 客服售后


import xingstar from "./xingstar.js";
import twice from "./twice.js";


import SystemUsers from "./System/SystemUsers/index"; // 系统管理
import SystemRole from "./System/SystemRole/index"; // 系统角色
import SystemMessages from "./System/SystemMessages/index"; // 系统消息
import SystemLog from "./System/SystemLog/index"; // 系统日志

import singupInformation from "./MatchManagement/SignupInformation/index"; //报名信息
import matchRecords from "./MatchManagement/MatchRecords/index"; //比赛记录
import matchConfig from './MatchManagement/matchConfig'

import SelectedActivities from "./Discover/SelectedActivities/index"; // 精选活动
import TutorialClassification from "./Discover/TutorialClassification/index"; // 教程分类
import TutorialManagement from "./Discover/TutorialManagement/index"; // 教程管理
import KnowledgeClassification from "./Discover/KnowledgeClassification/index"; // 知识分类
import QaClassification from "./Discover/QaClassification/index"; // 知识分类
import QaAdministration from "./Discover/QaAdministration/index"; // 问答管理
import SkippingKnowledge from "./Discover/SkippingKnowledge/index"; // 跳绳知识
import OrderManagement from "./Discover/OrderManagement/index"; // 订单管理
import CommodityManagement from "./Discover/CommodityManagement/index"; // 商品管理

import Rhythm from "./SetUp/Rhythm/index"; // 节拍设置
import ServiceManagement from "./Discover/ServiceManagement/index"; // 问答管理
import CourseMamagement from "./CourseMamagement/courseList/index"; //课程管理

import FirmwareVersion from "./SetUp/FirmwareVersion/index"; // 节拍设置

import Activity from "./DataAnalysis/Activity/index"; // 用户活跃度统计
import GrowthRate from "./DataAnalysis/GrowthRate/index"; // 用户增长度统计


import FinancialMamagement from "./FinancialMamagement/FinancialStatistics/index"; //收支管理

import dc from "./MatchManagement/dc/index";
import AppConfig from './AppConfig'

export default {
    singupInformation,
    matchRecords,
    dc,
    Common,
    system,
    user,
    teenager,
    after,
    SystemUsers,
    SystemRole,
    SystemMessages,
    SystemLog,
    SelectedActivities,
    TutorialClassification,
    TutorialManagement,
    KnowledgeClassification,
    QaClassification,
    QaAdministration,
    SkippingKnowledge,
    CommodityManagement,
    OrderManagement,
    Rhythm,
    Activity,
    GrowthRate,
    FirmwareVersion,
    ServiceManagement,
    CourseMamagement,
    FinancialMamagement,
    matchConfig,
    operation,
    AppConfig,
    xingstar,
    twice
};