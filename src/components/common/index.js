import SirTable from "./SirTable/index";
import SirUpload from "./SirUpload/index";
import SirUploadList from "./SirUploadList/index";
import SirQuillEditor from "./SirQuillEditor/index";
import UploadImg from "./UploadImg/index";
import UploadIcon from "./UploadIcon/index";
import UploadFile from "./UploadFile/index";
import UploadApk from "./UploadApk/index";
import Comp from "./custom-button/index";
import LabelItem from "./label-item/index";
import CustomSubTab from "./custom-sub-tab/index";
import UploadImage from "./upload-image/index";

export default {
  install: Vue => {
    Vue.component("SirTable", SirTable);
    Vue.component("SirUpload", SirUpload);
    Vue.component("SirUploadList", SirUploadList);
    Vue.component("SirQuillEditor", SirQuillEditor);
    Vue.component("UploadImg", UploadImg);
    Vue.component("UploadIcon", UploadIcon);
    Vue.component("UploadFile", UploadFile);
    Vue.component("UploadApk", UploadApk);
    Vue.component("CustomButton", Comp);
    Vue.component("LabelItem", LabelItem);
    Vue.component("CustomSubTab", CustomSubTab);
    Vue.component("UploadImage", UploadImage);
  }
};
