import CloudSyncTwoToneIcon from '@mui/icons-material/CloudSyncTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';

export default [
  {
    url: "/requestDemo",
    icon: CloudSyncTwoToneIcon,
    i18nKey: "menu.request.demo",
  },
  {
    url: "/formDemo",
    icon: AppRegistrationTwoToneIcon,
    i18nKey: "menu.form.demo",
    isPage: false,
    childRoutes: [
      {
        url: "validation",
        icon: FactCheckTwoToneIcon,
        i18nKey: "menu.form.validation",
      }
    ]
  },
  {
    url: "/table",
    icon: ViewListOutlinedIcon,
    i18nKey: "menu.table",
  },
  {
    url: "/reduxDemo",
    icon: StoreMallDirectoryTwoToneIcon,
    i18nKey: "menu.redux",
  },
  {
    url: "/okta",
    icon: ExitToAppTwoToneIcon,
    i18nKey: "menu.okta",
  }
]