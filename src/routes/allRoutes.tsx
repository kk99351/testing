import { Navigate } from "react-router-dom";

//Salesz
import Sales from "../pages/Sales";
//Analytics
import Analytics from "../pages/Analytics";
//Calendar
import Calendar from "../pages/Calendar";
//Chat
import Chat from "../pages/Chat";
//FileManager
import FileManager from "../pages/FileManager";
//Contacts
import UserGrid from "../pages/Contacts/UserGrid";
import UserList from "../pages/Contacts/UsertList";
import UsertSetting from "../pages/Contacts/UsertSetting";

//profile
import UserProfile from "../pages/Authentication/user-profile";

//Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login1";
import Login2 from "../pages/AuthenticationInner/Login2";
import Register1 from "../pages/AuthenticationInner/Register1";
import Register2 from "../pages/AuthenticationInner/Register2";
import Signout1 from "../pages/AuthenticationInner/Signout1";
import Signout2 from "../pages/AuthenticationInner/Signout2";
import ForgotPassword1 from "../pages/AuthenticationInner/ForgotPassword1";
import ForgotPassword2 from "../pages/AuthenticationInner/ForgotPassword2";
import ResetPassword1 from "../pages/AuthenticationInner/ResetPassword1";
import ResetPassword2 from "../pages/AuthenticationInner/ResetPassword2";

import EmailVerification1 from "../pages/AuthenticationInner/EmailVerification1";
import EmailVerification2 from "../pages/AuthenticationInner/EmailVerification2";
import TwoStep1 from "../pages/AuthenticationInner/TwoStep1";
import TwoStep2 from "../pages/AuthenticationInner/TwoStep2";
import LockScreen1 from "../pages/AuthenticationInner/LockScreen1";
import LockScreen2 from "../pages/AuthenticationInner/LockScreen2";
import Thankyou1 from "../pages/AuthenticationInner/Thankyou1";
import Thankyou2 from "../pages/AuthenticationInner/Thankyou2";

//Error
import Error1 from "../pages/Error/Error1";
import Error2 from "../pages/Error/Error2";
import ErrorBasic from "../pages/Error/ErrorBasic";
import ErrorCover from "../pages/Error/ErrorCover";

//Contact
import Inbox from "../pages/Email/Inbox";
import EmailRead from "../pages/Email/email-read";

//Gallery
import Gallery from "../pages/Gallery";

//projects
import ProjectGrid from "../pages/Projects/ProjectGrid";
import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";
import ProjectCreate from "../pages/Projects/ProjectCreate";

//Authentication pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

//utility
import PageStarter from "../pages/Utility/PageStarter";
import PagesComingsoon from "../pages/Utility/PageComingsoon";
import PageMaintenance from "../pages/Utility/PageMaintenance";
import PageFaqs from "../pages/Utility/PageFAQs";
import Profile from "../pages/Utility/Profile";

//pricing
import PricingBasic from "../pages/Pricing/PricingBasic";
import PricingCover from "../pages/Pricing/PricingCover";

//Invoice
import InvoiceList from "../pages/Invoices/invoice-list";
import InvoiceDetail from "../pages/Invoices/invoice-details";

//TimeLine
import TimeLineCenter from "../pages/Timeline/TimeLineCenter";
import TimeLineLeft from "../pages/Timeline/TimeLineLeft";
import TimeLineHorizontal from "../pages/Timeline/TimeLineHorizontal";

import Widgets from "../pages/Widgets";

//UI Components
import UiAlert from "../pages/UiComponents/UiAlert";
import UiButton from "../pages/UiComponents/UiButton";
import UiCard from "../pages/UiComponents/UiCard";
import UiCarousel from "../pages/UiComponents/UiCarousel";
import UiDropdowns from "../pages/UiComponents/UiDropdowns";
import UiGrid from "../pages/UiComponents/UiGrid";
import UiModal from "../pages/UiComponents/UiModals";
import UiImages from "../pages/UiComponents/UiImages";
import UiProgressbar from "../pages/UiComponents/UiProgressbar";
import UiGeneral from "../pages/UiComponents/UiGeneral";
import UiColors from "../pages/UiComponents/UiColors";
import UiTypography from "../pages/UiComponents/UiTypography";
import UiVideo from "../pages/UiComponents/UiVideo";
import UiTabsAccordions from "../pages/UiComponents/UiTabsAccordions";
import Utilities from "../pages/UiComponents/Utilities";
import UiPlaceholders from "../pages/UiComponents/UiPlaceholders";

//Forms pages
import FormElements from "../pages/Forms/FormElements";
import FormValidation from "../pages/Forms/FormValidation";
import AdvancedPlugins from "../pages/Forms/AdvancedPlugins";
import FormEditors from "../pages/Forms/FormEditors";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import FormMask from "../pages/Forms/FormMask";

//Tables
import BasicTable from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";

//Charts
import ChartsArea from "../pages/Charts/ChartsArea";
import ChartsBar from "../pages/Charts/ChartsBar";
import ChartsBoxplot from "../pages/Charts/ChartsBoxplot";
import ChartsBubble from "../pages/Charts/ChartsBubble";
import ChartsCandlestick from "../pages/Charts/ChartsCandlestick";
import ChartsColumn from "../pages/Charts/ChartsColumn";
import ChartsHeatmap from "../pages/Charts/ChartsHeatmap";
import ChartsLine from "../pages/Charts/ChartsLine";
import ChartsMixed from "../pages/Charts/ChartsMixed";
import ChartsPie from "../pages/Charts/ChartsPie";
import ChartsPolararea from "../pages/Charts/ChartsPolararea";
import Chartsradar from "../pages/Charts/Chartsradar";
import ChartsRadialbar from "../pages/Charts/ChartsRadialbar";
import ChartsScatter from "../pages/Charts/ChartsScatter";
import ChartsTimeline from "../pages/Charts/ChartsTimeline";
import ChartsTreemap from "../pages/Charts/ChartsTreemap";

//Icons
import IconUnicon from "../pages/Icons/IconUnicon";
import Feathericons from "../pages/Icons/Feathericons";
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//Extended pages
import UiLightbox from "../pages/Extended/Lightbox";
import RangeSlider from "../pages/Extended/Rangeslider";
import UiRating from "../pages/Extended/UiRating";
import Notifications from "../pages/Extended/Notifications";
import Swiperslider from "../pages/Extended/Swiperslider";

// Maps
// import MapsGoogle from "../pages/Maps/MapsGoogle";
import MapsVector from "../pages/Maps/MapsVector";
import MapsLeaflet from "../pages/Maps/MapsLeaflet";

//COMPANY Registration
import CompanyMaster from "../pages/Master-Module/MasterLists/CompanyRepo/CompanyMaster";
import MailConfiguration from "src/pages/Master-Module/MasterLists/CompanyRepo/MailConfiguration";
import HelpMailDesk from "src/pages/Master-Module/MasterLists/CompanyRepo/HelpMailDesk";
//GEOGRAPHICAL GROUP
import Branch from "src/pages/Master-Module/MasterLists/CompanyRepo/Geographical_Area/Branch";
import City from "src/pages/Master-Module/MasterLists/CompanyRepo/Geographical_Area/City";
import CompanyGroup from "src/pages/Master-Module/MasterLists/CompanyRepo/Geographical_Area/CompanyGroup";
import Plant from "src/pages/Master-Module/MasterLists/CompanyRepo/Geographical_Area/Plant";
import Region from "src/pages/Master-Module/MasterLists/CompanyRepo/Geographical_Area/Region";
//End
import EmplyeeMaster from "src/pages/Master-Module/MasterLists/AccessManegment/EmplyeeMaster";
import UserTypeMaster from "src/pages/Master-Module/MasterLists/AccessManegment/UserTypeMaster";
import UserPermission from "src/pages/Master-Module/MasterLists/AccessManegment/UsePermission";
import LoginProvision from "src/pages/Master-Module/MasterLists/AccessManegment/LoginProvison";
import Experimental from "src/pages/Experimental";
import Home from "src/pages/Home";
import CreatVendor from "src/pages/Master-Module/MasterLists/SupplierMaster/CreatVendor";
import VendorApprovelL1 from "src/pages/Master-Module/MasterLists/SupplierMaster/VendorApprovelL1";
import ApproveVendorList from "src/pages/Master-Module/MasterLists/SupplierMaster/ApproveVendorList";
import AskForInfo from "src/pages/Master-Module/MasterLists/SupplierMaster/AskForInfo";
/*CONFIGATION PAGES PATH */
import TermsAndConditions from "src/pages/Master-Module/MasterLists/Comfiguration-Master/TermAndCondition";
import DoaMaster from "src/pages/Master-Module/MasterLists/Comfiguration-Master/DoaMaster";
import DeligationMaster from "src/pages/Master-Module/MasterLists/Comfiguration-Master/DeligationMaster";
import TaxDetails from "src/pages/Master-Module/MasterLists/Comfiguration-Master/TaxDetails";
import PaymentTerms from "src/pages/Master-Module/MasterLists/Comfiguration-Master/PaymentTerms";
import PaymentMethod from "src/pages/Master-Module/MasterLists/Comfiguration-Master/PaymentMethods";
import AddCurrency from "src/pages/Master-Module/MasterLists/Comfiguration-Master/AddCurrency";
import FinancialYear from "src/pages/Master-Module/MasterLists/Comfiguration-Master/FinancialYear";
import BankMaster from "src/pages/Master-Module/MasterLists/Comfiguration-Master/BankMaster";
/*MATERIAL-MASTER*/
import CreateItem from "src/pages/Master-Module/MasterLists/MaterialMaster/CreateItems";
import UnitOfMesurement from "src/pages/Master-Module/MasterLists/MaterialMaster/UOM";
/*MATERIAL-MASTER create Page*/
import CreateUom from "src/pages/Master-Module/CreatePages/CreateUom";
import CreateItemsCreate from "src/pages/Master-Module/CreatePages/CreateItemsCreate";
import UOMConversion from "src/pages/Master-Module/MasterLists/MaterialMaster/UOMConversion";
/*MATERIAL-MASTER Modify Page*/
import UomModify from "src/pages/Master-Module/UpdatePage/UomModify";
import CreateItemsModify from "src/pages/Master-Module/UpdatePage/CreateItemsModify";
import FormDetails from "src/pages/Master-Module/MasterLists/CompanyRepo/FormDetails";
import CompanyGroupCreate from "src/pages/Master-Module/CreatePages/CompanyGroupCreate";
import CompanyGroupUpdate from "src/pages/Master-Module/UpdatePage/CompanyGroupUpdate";
import RegionCreate from "src/pages/Master-Module/CreatePages/RegionCreate";
import RegionUpdate from "src/pages/Master-Module/UpdatePage/RegionUpdate";
import DesignationMaster from "src/pages/Master-Module/MasterLists/AccessManegment/DesignationMaster";
import Department from "src/pages/Master-Module/MasterLists/AccessManegment/Department";
import EmplyeeMasterCreate from "src/pages/Master-Module/CreatePages/EmplyeeMasterCreate";
import EmplyeeMasterUpdate from "src/pages/Master-Module/UpdatePage/EmplyeeMasterUpdate";
import PlantCreate from "src/pages/Master-Module/CreatePages/PlantCreate";
import CityCreate from "src/pages/Master-Module/CreatePages/CityCreate";
import CityUpdate from "src/pages/Master-Module/UpdatePage/CityUpdate";
import BranchUpdate from "src/pages/Master-Module/UpdatePage/BranchUpdate";
import BranchCreate from "src/pages/Master-Module/CreatePages/BranchCreate";
import CreateCategories from "src/pages/Master-Module/MasterLists/MaterialMaster/CreateCategories";
import SubCategories from "src/pages/Master-Module/MasterLists/MaterialMaster/SubCategories";

import SubCategoryCreate from "src/pages/Master-Module/CreatePages/SubCategoryCreate";
import CategoriesUpdate from "src/pages/Master-Module/UpdatePage/CategoriesUpdte";
import SubCategoriesUpdate from "src/pages/Master-Module/UpdatePage/SubCategoriesUpdate";
import UserTypeCreate from "src/pages/Master-Module/CreatePages/UserTypeCreate";
import UserTypeUpdate from "src/pages/Master-Module/UpdatePage/UserTypeUpdate";
import LoginProvison from "src/pages/Master-Module/MasterLists/AccessManegment/LoginProvison";
import UserLoginCreate from "src/pages/Master-Module/CreatePages/UserLoginCreate";
import UserLoginUpdate from "src/pages/Master-Module/UpdatePage/UserLoginUpdate";
import DepartmentCreate from "src/pages/Master-Module/CreatePages/DepartmentCreate";
import DepartmentUpdate from "src/pages/Master-Module/UpdatePage/DepartmentUpdate";
/*CONFIGATION PAGES CREATE AND MODIFY */
import DoaCreate from "src/pages/Master-Module/CreatePages/DoaCreate";
import DeligationCreate from "src/pages/Master-Module/CreatePages/DeligationCreate";
import PaymentMethodCreate from "src/pages/Master-Module/CreatePages/PaymentMethodCreate";
import PaymentTermCreate from "src/pages/Master-Module/CreatePages/PaymentTermCreate";
import BankMasterCreate from "src/pages/Master-Module/CreatePages/BankMasterCreate";
import TaxConfigurationCreate from "src/pages/Master-Module/CreatePages/TaxConfigurationCreate";
import FinancialYearCreate from "src/pages/Master-Module/CreatePages/FinancialYearCreate";
import AddCurrencyCreate from "src/pages/Master-Module/CreatePages/AddCurrencyCreate";
import TermAndConditionCreate from "src/pages/Master-Module/CreatePages/TermAndConditionCreate";
import DoaModify from "src/pages/Master-Module/UpdatePage/DoaModify";
import DeligationModify from "src/pages/Master-Module/UpdatePage/DeligationModify";
import PaymentMethodModify from "src/pages/Master-Module/UpdatePage/PaymentMethodModify";
import PaymentTermModify from "src/pages/Master-Module/UpdatePage/PaymentTermModify";
import BankMasterModify from "src/pages/Master-Module/UpdatePage/BankMasterModify";
import TaxConfigurationModify from "src/pages/Master-Module/UpdatePage/TaxConfigurationModify";
import FinancialYearModify from "src/pages/Master-Module/UpdatePage/FinancialYearModify";
import AddCurrencyModify from "src/pages/Master-Module/UpdatePage/AddCurrencyModify";
import TermAndConditionModify from "src/pages/Master-Module/UpdatePage/TermAndConditionModify";
//Asset Pages
import AddNewAsset from "src/pages/Asset-Module/AssetLists/AddNewAsset";
import AddNewAssetCreate from "src/pages/Asset-Module/CreatePages/AddNewAssetCreate";
import AddNewAssetUpdate from "src/pages/Asset-Module/UpdatePages/AddNewAssetUpdate";
import AllAsset from "src/pages/Asset-Module/AssetLists/AllAsset";
import BillsEntry from "src/pages/Asset-Module/AssetLists/BillsEntry";
import ViaBill from "src/pages/Asset-Module/AssetLists/ViaBill";
import Barcode from "src/pages/Asset-Module/AssetLists/Barcode";
import QrCode from "src/pages/Asset-Module/AssetLists/QrCode";
import BulkAssetAllocate from "src/pages/Asset-Module/AssetLists/BulkAssetAllocate";
import DeAllocate from "src/pages/Asset-Module/AssetLists/DeAllocate";
import DamagedAssets from "src/pages/Asset-Module/AssetLists/DamagedAssets";
import ApproveDamagedAssets from "src/pages/Asset-Module/AssetLists/ApproveDamagedAssets";
import AllAssetUpdate from "src/pages/Asset-Module/UpdatePages/AllAssetUpdate";
import AllAssetCreate from "src/pages/Asset-Module/UpdatePages/AllAssetUpdate";
import BulkAssetUpdate from "src/pages/Asset-Module/UpdatePages/BulkAssetUpdate";
import DisplayBillEntryDetails from "src/pages/Asset-Module/UpdatePages/BillEntryDetails";
import DisplayViaBillEntryDetails from "src/pages/Asset-Module/UpdatePages/ViaBillEntryDetails";
import DamagedAssetUpdate from "src/pages/Asset-Module/UpdatePages/DamagedAssetUpdate";
import ApproveDamagedAssetsUpdate from "src/pages/Asset-Module/UpdatePages/ApproveDamagedAssetsUpdate";
import UOMConversionCreate from "src/pages/Master-Module/CreatePages/UOMConversionCreate";
import UOMConversionUpdate from "src/pages/Master-Module/UpdatePage/UOMConversionUpdate";
import DesignationCreate from "src/pages/Master-Module/CreatePages/DesignationCreate";
import DesignationUpdate from "src/pages/Master-Module/UpdatePage/DesignationUpdate";
import CreateMaterial from "src/pages/Master-Module/CreatePages/CreateMaterial";
import VendorMasterUpdate from "src/pages/Master-Module/UpdatePage/VendorMasterUpdate";
import VendorMasterCreate from "src/pages/Master-Module/CreatePages/VendorMaster";
import PlantUpdate from "src/pages/Master-Module/UpdatePage/PlantUpdate";
import Floor from "src/pages/Master-Module/MasterLists/CompanyRepo/Geographical_Area/Floor";
import FlooeCreate from "src/pages/Master-Module/CreatePages/FloorCreate";
import FloorUpdate from "src/pages/Master-Module/UpdatePage/FloorUpdate";
import FloorCreate from "src/pages/Master-Module/CreatePages/FloorCreate";
import AssetLink from "src/pages/Asset-Module/AssetLists/AssetLink";
import AssetDeLink from "src/pages/Asset-Module/AssetLists/AssetDeLink";
import AssetMaintance from "src/pages/Asset-Module/AssetLists/AssetMaintenance";
import AssetMaintenance from "src/pages/Asset-Module/AssetLists/AssetMaintenance";
import AssetMaintainancenext from "src/pages/Asset-Module/AssetLists/AssetMaintainancenext";
import InterTarnsferReq from "src/pages/Transfer/InterTransfer.jsx/InterTarnsferReq";
import InterTransferApprove from "src/pages/Transfer/InterTransfer.jsx/InterTransferApprove";
import InterTransfer from "src/pages/Transfer/InterTransfer.jsx/InterTransfer";
import PrintGatePass from "src/pages/Transfer/InterTransfer.jsx/PrintGatePass";
import ReceiveAssets from "src/pages/Transfer/InterTransfer.jsx/ReceiveAssets";
import ReturnAknow from "src/pages/Transfer/InterTransfer.jsx/ReturnAknow";
import IntraTransferRequest from "src/pages/Transfer/IntraTransfer.jsx/IntraTransferRequest";
import IntraTransferApproval from "src/pages/Transfer/IntraTransfer.jsx/IntraTransferApproval";
import IntraTransfer from "src/pages/Transfer/IntraTransfer.jsx/IntraTransfer";
import IntraRecieveAssets from "src/pages/Transfer/IntraTransfer.jsx/IntraRecieveAssets";
import TransferApprovalPreview from "src/pages/Transfer/IntraCreateUpdate.jsx/TransferApprovalPreview";
import TransferPreview from "src/pages/Transfer/IntraCreateUpdate.jsx/TransferPreview";
import RecieveAssetPreview from "src/pages/Transfer/IntraCreateUpdate.jsx/RecieveAssetPreview";
import InterTransferApprovePreview from "src/pages/Transfer/InterCreateUpdate.jsx/InterTransferApprovePreview";
import InterTransferPreview from "src/pages/Transfer/InterCreateUpdate.jsx/InterTransferPreview";
import InterRecieveAssetsPreview from "src/pages/Transfer/InterCreateUpdate.jsx/InterRecieveAssetsPreview";
import ReturnAknowPreview from "src/pages/Transfer/InterCreateUpdate.jsx/ReturnAknowPreview";
import PrintGatePassPreview from "src/pages/Transfer/InterCreateUpdate.jsx/PrintGatePassPreview";
import MasterReport from "src/pages/Reports/MasterReport";
import MasterReportview from "src/pages/Reports/ReportViewPages/MasterReportview";
import AssetStatusReport from "src/pages/Reports/AssetStatusReport";
import EmpWiseReport from "src/pages/Reports/EmpWiseReport";
import ClientWiseReport from "src/pages/Reports/ClientWiseReport";
import AccessoryHistoryReport from "src/pages/Reports/AccessoryHistoryReport";
import AssetHistoryReport from "src/pages/Reports/AssetHistoryReport";
import AmcWarrentyReport from "src/pages/Reports/AmcWarrentyReport";
import LeaseReport from "src/pages/Reports/LeaseReport";
import TransferRequestReport from "src/pages/Reports/TransferReport/TransferRequestReport";
import TransferReport from "src/pages/Reports/TransferReport/TransferReport";
import TransferRecieveReport from "src/pages/Reports/TransferReport/TransferRecieveReport";
import TransferApprovalReport from "src/pages/Reports/TransferReport/TransferApprovalReport";
import AssetStatusReportview from "src/pages/Reports/ReportViewPages/AssetStatusReportview";
import EmpWiseReportview from "src/pages/Reports/ReportViewPages/EmpWiseReportview";
import ClientWiseReportview from "src/pages/Reports/ReportViewPages/ClientWiseReportview";
import AccessoryHistoryReportview from "src/pages/Reports/ReportViewPages/AccessoryHistoryReportview";
import AssetHistoryReportview from "src/pages/Reports/ReportViewPages/AssetHistoryReportview";
import AmcWarrenttyReportview from "src/pages/Reports/ReportViewPages/AmcWarrenttyReportview";
import LeaseReportView from "src/pages/Reports/ReportViewPages/LeaseReportView";
import TransferRequestReportview from "src/pages/Reports/ReportViewPages/TransferReportView/TransferRequestReportview";
import TransferReportview from "src/pages/Reports/ReportViewPages/TransferReportView/TransferReportview";
import TransferRecieveReportview from "src/pages/Reports/ReportViewPages/TransferReportView/TransferRecieveReportview";
import TransferApprovalReportview from "src/pages/Reports/ReportViewPages/TransferReportView/TransferApprovalReportview";
import DepreciationMaster from "src/pages/Depreciation/DepreciationMaster";
import CAYearly from "src/pages/Depreciation/DepreciationConfig/CAYearly";
import ITAct from "src/pages/Depreciation/DepreciationConfig/ITAct";
import MonthlyDep from "src/pages/Depreciation/DepreciationYearMonth/MonthlyDep";
import YearlyDep from "src/pages/Depreciation/DepreciationYearMonth/YearlyDep";
import AdditionDeletion from "src/pages/Depreciation/AdditionDeletion";
import Entity from "src/pages/Master-Module/MasterLists/CompanyRepo/Geographical_Area/Entity";
import EntityUpdate from "src/pages/Master-Module/UpdatePage/EntityUpdate";
import Entitycreate from "src/pages/Master-Module/CreatePages/Entitycreate";
import AdditionDeletionlist from "src/pages/Depreciation/AdditionDeletionlist";
import CreateVendor from "src/pages/Master-Module/CreatePages/VendorCreate";
import VendorUpdate from "src/pages/Master-Module/UpdatePage/VendorUpdate";
import VendorCreate from "src/pages/Master-Module/CreatePages/VendorCreate";
import UserPermissionUpdate from "src/pages/Master-Module/UpdatePage/UserPermissionUpdate";
import UserPermissionCreate from "src/pages/Master-Module/CreatePages/UserPermissionCreate";
interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}
const userRoutes: Array<RouteProps> = [
  //new page
  { path: "ex", component: <Experimental /> },
  { path: "/home", component: <Home /> },
  //DEPRETIATION MODFY PATH
  { path: "/depreciation_master", component: <DepreciationMaster /> },
  { path: "/ca_yearly", component: <CAYearly /> },
  { path: "/it_act", component: <ITAct /> },
  { path: "/monthly_depreciation", component: <MonthlyDep /> },
  { path: "/yearly_depreciation", component: <YearlyDep /> },
  { path: "/addition_Deletion", component: <AdditionDeletion /> },
  { path: "/addition_Deletion_view/:id", component: <AdditionDeletionlist /> },

  //ASSET MASTER PAGES PATH
  { path: "/add_new_asset", component: <AddNewAsset /> },
  { path: "/all_asset", component: <AllAsset /> },
  { path: "/bills_entry", component: <BillsEntry /> },
  { path: "/via_bills", component: <ViaBill /> },
  // { path: "/barcode", component: <Barcode toggleCheckbox={function (...args: any[]) {
  //   throw new Error("Function not implemented.");
  // } } /> },
  // { path: "/qr_code", component: <QrCode toggleCheckbox={function (...args: any[]) {
  //   throw new Error("Function not implemented.");
  // } } /> },
  { path: "/barcode", component: <Barcode /> },
  { path: "/qr_code", component: <QrCode /> },
  { path: "/asset_maintenance", component: <AssetMaintenance /> },
  { path: "/asset_maintenance_next", component: <AssetMaintainancenext /> },
  { path: "/bulk_asset_allocate", component: <BulkAssetAllocate /> },
  { path: "/deallocate", component: <DeAllocate /> },
  { path: "/damaged_asset", component: <DamagedAssets /> },
  { path: "/approve_damaged_asset", component: <ApproveDamagedAssets /> },
  { path: "/link", component: <AssetLink /> },
  { path: "/delink", component: <AssetDeLink /> },

  //ASSET MASTER CREATE PATH
  { path: "/create_add_new_asset", component: <AddNewAssetCreate /> },
  { path: "/create_all_asset", component: <AllAssetCreate /> },

  //ASSET MASTER MODIFY PATH
  { path: "/modify_add_new_asset/:id", component: <AddNewAssetUpdate /> },
  { path: "/modify_all_asset/:id", component: <AllAssetUpdate /> },
  { path: "/modify_bulk_asset_allocate/:id", component: <BulkAssetUpdate /> },
  { path: "/modify_damaged_asset/:id", component: <DamagedAssetUpdate /> },
  {
    path: "/modify_approve_damaged_asset/:id",
    component: <ApproveDamagedAssetsUpdate />,
  },

  //TRANSFER MASTER PAGES PATH
  { path: "/inter_transfer_request", component: <InterTarnsferReq /> },
  { path: "/inter_transfer_approval", component: <InterTransferApprove /> },
  { path: "/inter_transfer", component: <InterTransfer /> },
  { path: "/print_gate_pass", component: <PrintGatePass /> },
  { path: "/inter_recieve_assets", component: <ReceiveAssets /> },
  { path: "/inter_return_acknowledge", component: <ReturnAknow /> },

  {
    path: "/inter_transfer_approval_preview/:id",
    component: <InterTransferApprovePreview />,
  },
  { path: "/inter_transfer_preview/:id", component: <InterTransferPreview /> },
  {
    path: "/inter_recieve_asset_preview/:id",
    component: <InterRecieveAssetsPreview />,
  },
  {
    path: "/inter_return_acknowledge_preview/:id",
    component: <ReturnAknowPreview />,
  },
  { path: "/print_gate_pass_preview/:id", component: <PrintGatePassPreview /> },

  { path: "/intra_transfer_request", component: <IntraTransferRequest /> },
  { path: "/intra_transfer_approval", component: <IntraTransferApproval /> },
  { path: "/intra_transfer", component: <IntraTransfer /> },
  { path: "/intra_recieve_assets", component: <IntraRecieveAssets /> },

  {
    path: "/intra_transfer_approval_preview/:id",
    component: <TransferApprovalPreview />,
  },
  { path: "/intra_transfer_preview/:id", component: <TransferPreview /> },
  {
    path: "/intra_recieve_asset_preview/:id",
    component: <RecieveAssetPreview />,
  },

  //ANALYTICS/REPORT PATH
  { path: "/master_report", component: <MasterReport /> },
  { path: "/master_report_view", component: <MasterReportview /> },
  { path: "/asset_status_report", component: <AssetStatusReport /> },
  { path: "/asset_status_report_view", component: <AssetStatusReportview /> },
  { path: "/employee_wise_report", component: <EmpWiseReport /> },
  { path: "/employee_wise_report_view", component: <EmpWiseReportview /> },
  { path: "/client_wise_report", component: <ClientWiseReport /> },
  { path: "/client_wise_report_view", component: <ClientWiseReportview /> },
  { path: "/accessory_history_report", component: <AccessoryHistoryReport /> },
  {
    path: "/accessory_history_report_view",
    component: <AccessoryHistoryReportview />,
  },
  { path: "/asset_history_report", component: <AssetHistoryReport /> },
  { path: "/asset_history_report_view", component: <AssetHistoryReportview /> },
  { path: "/amc_warrenty_report", component: <AmcWarrentyReport /> },
  { path: "/amc_warrenty_report_view", component: <AmcWarrenttyReportview /> },
  { path: "/lease_report", component: <LeaseReport /> },
  { path: "/lease_report_view", component: <LeaseReportView /> },

  { path: "/transfer_request_report", component: <TransferRequestReport /> },
  {
    path: "/transfer_request_report_view",
    component: <TransferRequestReportview />,
  },

  { path: "/transfer_report", component: <TransferReport /> },
  { path: "/transfer_report_view", component: <TransferReportview /> },

  { path: "/transfer_recieve_report", component: <TransferRecieveReport /> },
  {
    path: "/transfer_recieve_report_view",
    component: <TransferRecieveReportview />,
  },

  { path: "/transfer_approval_report", component: <TransferApprovalReport /> },
  {
    path: "/transfer_approval_report_view",
    component: <TransferApprovalReportview />,
  },

  //master-list
  { path: "/formDetails", component: <FormDetails /> },
  { path: "/company_group", component: <CompanyGroup /> },
  { path: "/region", component: <Region /> },
  { path: "/city", component: <City /> },
  { path: "/branch", component: <Branch /> },
  { path: "/plant", component: <Plant /> },
  { path: "/emplyee_master", component: <EmplyeeMaster /> },
  // { path: "/designation", component: <DesignationMaster/> },
  { path: "/designation", component: <DesignationMaster /> },
  { path: "/department", component: <Department /> },
  { path: "/modify_categories/:id", component: <CategoriesUpdate /> },

  { path: "/user_type", component: <UserTypeMaster /> },
  { path: "/user_permission", component: <UserPermission /> },
  {
    path: "/create_user_permission",
    component: <UserPermissionCreate></UserPermissionCreate>,
  },
  { path: "/modify_user_permission/:id", component: <UserPermissionUpdate /> },

  { path: "/user_login", component: <LoginProvision /> },
  { path: "/create_vendor", component: <CreatVendor /> },
  { path: "/vendor_approval", component: <VendorApprovelL1 /> },
  { path: "/vendor_create", component: <VendorCreate /> },
  { path: "/modify_vendor/:id", component: <VendorUpdate /> },

  { path: "/create_subcatogries", component: <SubCategories /> },

  { path: "/approved_vendor_list", component: <ApproveVendorList /> },
  { path: "/ask_info", component: <AskForInfo /> },
  { path: "/create_subcatogries", component: <SubCategories /> },
  { path: "/create_catogries", component: <CreateCategories /> },
  { path: "/uom_conversion", component: <UOMConversion /> },
  { path: "/createdesignation", component: <DesignationCreate /> },
  { path: "/modify_designation/:id", component: <DesignationUpdate /> },

  /*MATERIAL-MASTER*/
  { path: "/create_items", component: <CreateItem /> },
  { path: "/unit", component: <UnitOfMesurement /> },
  { path: "/create_uom_conversion", component: <UOMConversionCreate /> },
  { path: "/modify_uom_conversion/:id", component: <UOMConversionUpdate /> },
  { path: "/vendor_master/:id", component: <VendorMasterUpdate /> },
  { path: "/create_vendormaster/id", component: <VendorMasterCreate /> },

  /*CONFIGURATION MASTER PAGES PATH */
  { path: "/doa_master", component: <DoaMaster /> },
  { path: "/deligation_master", component: <DeligationMaster /> },
  { path: "/tax_details", component: <TaxDetails /> },
  { path: "/payment_term", component: <PaymentTerms /> },
  { path: "/payment_method", component: <PaymentMethod /> },
  { path: "/financial_year", component: <FinancialYear /> },
  { path: "/add_currency", component: <AddCurrency /> },
  { path: "/bankmaster", component: <BankMaster /> },
  { path: "/terms_and_condition", component: <TermsAndConditions /> },
  //CONFIGURATION create-page:-
  { path: "/doa_create", component: <DoaCreate /> },
  { path: "/deligation_create", component: <DeligationCreate /> },
  { path: "/create_payment_method", component: <PaymentMethodCreate /> },
  { path: "/create_payment_term", component: <PaymentTermCreate /> },
  { path: "/create_bank_master", component: <BankMasterCreate /> },
  { path: "/tax_configuration_create", component: <TaxConfigurationCreate /> },
  { path: "/create_finanacial_year", component: <FinancialYearCreate /> },
  { path: "/create_add_currency", component: <AddCurrencyCreate /> },
  {
    path: "/create_terms_and_conditions",
    component: <TermAndConditionCreate />,
  },
  //CONFIGURATION update-page:-
  { path: "/modify_doa/:id", component: <DoaModify /> },
  { path: "/modify_deligation_master/:id", component: <DeligationModify /> },
  { path: "/modify_Payment_method/:id", component: <PaymentMethodModify /> },
  { path: "/modify_Payment_term/:id", component: <PaymentTermModify /> },
  { path: "/modify_bank_master/:id", component: <BankMasterModify /> },
  {
    path: "/modify_tax_configuration/:id",
    component: <TaxConfigurationModify />,
  },
  { path: "/modify_financial_year/:id", component: <FinancialYearModify /> },
  { path: "/modify_add_currency/:id", component: <AddCurrencyModify /> },
  {
    path: "/modify_terms_and_conditions/:id",
    component: <TermAndConditionModify />,
  },
  //MATERIAL-MASTER create page:-
  { path: "/createuom", component: <CreateUom /> },
  { path: "/createcreateitems", component: <CreateItemsCreate /> },
  //MATERIAL-MASTER Modify page:-
  { path: "modifyuom/:id", component: <UomModify /> },
  { path: "/modifycreateitems/:id", component: <CreateItemsModify /> },
  //update-page:-
  { path: "/createcompanygroup", component: <CompanyGroupCreate /> },
  { path: "/createregion", component: <RegionCreate /> },
  { path: "/create_emplyeemaster", component: <EmplyeeMasterCreate /> },
  //update-page:-
  { path: "/company_group/:id", component: <CompanyGroupUpdate /> },
  { path: "/region/:id", component: <RegionUpdate /> },
  { path: "/emplyee_master/:id", component: <EmplyeeMasterUpdate /> },
  { path: "/doa_master", component: <DoaMaster /> },
  { path: "/deligation_master", component: <DeligationMaster /> },
  { path: "/tax_details", component: <TaxDetails /> },
  { path: "/payment_term", component: <PaymentTerms /> },
  { path: "/payment_method", component: <PaymentMethod /> },
  { path: "/financial_year", component: <FinancialYear /> },
  { path: "/add_currency", component: <AddCurrency /> },
  { path: "/bankmaster", component: <BankMaster /> },
  { path: "/terms_and_condition", component: <TermsAndConditions /> },
  //create-page:-
  { path: "/doa_create", component: <DoaCreate /> },
  { path: "/deligation_create", component: <DeligationCreate /> },
  { path: "/createcompanygroup", component: <CompanyGroupCreate /> },
  { path: "/createregion", component: <RegionCreate /> },
  { path: "/floor", component: <Floor /> },

  { path: "/createfloor", component: <FloorCreate /> },

  { path: "/updatefloor/:id", component: <FloorUpdate /> },
  { path: "/entity", component: <Entity /> },
  { path: "/entity_create", component: <Entitycreate /> },
  { path: "/entity_update/:id", component: <EntityUpdate /> },

  { path: "/updateplant/:id", component: <PlantUpdate /> },
  { path: "/createcity", component: <CityCreate /> },
  { path: "/createbranch", component: <BranchCreate /> },
  { path: "/createplant", component: <PlantCreate /> },
  { path: "/c_emplyeemaster", component: <EmplyeeMasterCreate /> },
  { path: "/createcategory", component: <CreateMaterial /> },
  { path: "/createsubcategory", component: <SubCategoryCreate /> },
  { path: "/usertypecreate", component: <UserTypeCreate /> },
  { path: "/createuserlogin", component: <UserLoginCreate /> },
  { path: "/createdepartment", component: <DepartmentCreate /> },
  //update-page:-
  { path: "/company_group/:id", component: <CompanyGroupUpdate /> },
  { path: "/city/:id", component: <CityUpdate /> },
  { path: "/region/:id", component: <RegionUpdate /> },
  { path: "/branch/:id", component: <BranchUpdate /> },
  { path: "/emplyee_master/:id", component: <EmplyeeMasterUpdate /> },
  { path: "/modify_subcatogries/:id", component: <SubCategoriesUpdate /> },
  { path: "/create_catogries/:id", component: <SubCategoriesUpdate /> },
  { path: "/modify_user_type/:id", component: <UserTypeUpdate /> },
  { path: "/user_login/:id", component: <UserLoginUpdate /> },
  { path: "/modify_department/:id", component: <DepartmentUpdate /> },

  //AssetsSraban
  { path: "/bill_entry/:id", component: <DisplayBillEntryDetails /> },
  { path: "/via_bill/:id", component: <DisplayViaBillEntryDetails /> },

  //dashboard
  { path: "/sales", component: <Sales /> },
  { path: "/dashboards-analytics", component: <Analytics /> },
  { path: "/calendar", component: <Calendar /> },
  { path: "/chat", component: <Chat /> },
  { path: "/file-manager", component: <FileManager /> },
  { path: "/inbox", component: <Inbox /> },
  { path: "/read-email", component: <EmailRead /> },
  { path: "/user-grid", component: <UserGrid /> },
  { path: "/user-list", component: <UserList /> },
  { path: "/user-settings", component: <UsertSetting /> },
  { path: "/gallery", component: <Gallery /> },
  { path: "/projects-grid", component: <ProjectGrid /> },
  { path: "/projects-list", component: <ProjectList /> },
  { path: "/projects-overview", component: <ProjectOverview /> },
  { path: "/projects-create", component: <ProjectCreate /> },

  //Widgets
  { path: "/widgets", component: <Widgets /> },

  //UI Components
  { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButton /> },
  { path: "/ui-cards", component: <UiCard /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-dropdowns", component: <UiDropdowns /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-utilities", component: <Utilities /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },

  //Extended pages
  { path: "/extended-lightbox", component: <UiLightbox /> },
  { path: "/extended-rangeslider", component: <RangeSlider /> },
  { path: "/extended-rating", component: <UiRating /> },
  { path: "/extended-notifications", component: <Notifications /> },
  { path: "/extended-swiperslider", component: <Swiperslider /> },

  //Utility
  { path: "/pages-starter", component: <PageStarter /> },
  { path: "/pages-faqs", component: <PageFaqs /> },
  { path: "/pages-profile", component: <Profile /> },

  //pricing
  { path: "/pricing-basic", component: <PricingBasic /> },
  { path: "/pricing-table", component: <PricingCover /> },

  //Invoice
  { path: "/invoices-list", component: <InvoiceList /> },
  { path: "/invoices-detail", component: <InvoiceDetail /> },

  //Timeline
  { path: "/timeline-center", component: <TimeLineCenter /> },
  { path: "/timeline-left", component: <TimeLineLeft /> },
  { path: "/timeline-horizontal", component: <TimeLineHorizontal /> },

  // Forms pages
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-validation", component: <FormValidation /> },
  { path: "/form-advanced", component: <AdvancedPlugins /> },
  { path: "/form-editors", component: <FormEditors /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-mask", component: <FormMask /> },

  //tables
  { path: "/tables-basic", component: <BasicTable /> },

  //charts
  { path: "/charts-area", component: <ChartsArea /> },
  { path: "/charts-bar", component: <ChartsBar /> },
  { path: "/charts-boxplot", component: <ChartsBoxplot /> },
  { path: "/charts-bubble", component: <ChartsBubble /> },
  { path: "/charts-candlestick", component: <ChartsCandlestick /> },
  { path: "/charts-column", component: <ChartsColumn /> },
  { path: "/charts-heatmap", component: <ChartsHeatmap /> },
  { path: "/charts-line", component: <ChartsLine /> },
  { path: "/charts-mixed", component: <ChartsMixed /> },
  { path: "/charts-pie", component: <ChartsPie /> },
  { path: "/charts-polararea", component: <ChartsPolararea /> },
  { path: "/charts-radar", component: <Chartsradar /> },
  { path: "/charts-radialbar", component: <ChartsRadialbar /> },
  { path: "/charts-scatter", component: <ChartsScatter /> },
  { path: "/charts-timeline", component: <ChartsTimeline /> },
  { path: "/charts-treemap", component: <ChartsTreemap /> },

  //Icons
  { path: "/icons-boxicons", component: <IconBoxicons /> },
  { path: "/icons-feathericons", component: <Feathericons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },
  { path: "/icons-unicons", component: <IconUnicon /> },

  // //profile
  { path: "/profile", component: <UserProfile /> },

  // Maps
  // { path: "/maps-google", component: <MapsGoogle/> },
  { path: "/maps-vector", component: <MapsVector /> },
  { path: "/maps-leaflet", component: <MapsLeaflet /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  // { path: "/", exact: true, component: () => <Navigate to="/sales" /> }
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
  },
  { path: "*", component: <Navigate to="/home" /> },
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/register", component: <Register /> },
  { path: "/forgot-password", component: <ForgetPwd /> },

  // Authentication Inner
  { path: "/auth-signin-basic", component: <Login1 /> },
  { path: "/auth-signin-cover", component: <Login2 /> },
  { path: "/auth-signup-basic", component: <Register1 /> },
  { path: "/auth-signup-cover", component: <Register2 /> },
  { path: "/auth-signout-basic", component: <Signout1 /> },
  { path: "/auth-signout-cover", component: <Signout2 /> },
  { path: "/auth-lockscreen-basic", component: <LockScreen1 /> },
  { path: "/auth-lockscreen-cover", component: <LockScreen2 /> },
  { path: "/auth-forgotpassword-basic", component: <ForgotPassword1 /> },
  { path: "/auth-forgotpassword-cover", component: <ForgotPassword2 /> },
  { path: "/auth-resetpassword-basic", component: <ResetPassword1 /> },
  { path: "/auth-resetpassword-cover", component: <ResetPassword2 /> },
  { path: "/auth-emailverification-basic", component: <EmailVerification1 /> },
  { path: "/auth-emailverification-cover", component: <EmailVerification2 /> },
  { path: "/auth-2step-basic", component: <TwoStep1 /> },
  { path: "/auth-2step-cover", component: <TwoStep2 /> },
  { path: "/auth-thankyou-basic", component: <Thankyou1 /> },
  { path: "/auth-thankyou-cover", component: <Thankyou2 /> },

  { path: "/error-404-basic", component: <Error1 /> },
  { path: "/error-404-cover", component: <Error2 /> },
  { path: "/error-500-basic", component: <ErrorBasic /> },
  { path: "/error-500-cover", component: <ErrorCover /> },

  // //utility page
  { path: "/pages-comingsoon", component: <PagesComingsoon /> },
  { path: "/pages-maintenance", component: <PageMaintenance /> },
];

export { userRoutes, authRoutes };
