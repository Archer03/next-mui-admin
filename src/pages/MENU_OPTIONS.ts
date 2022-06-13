import CloudSyncTwoToneIcon from '@mui/icons-material/CloudSyncTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import ViewListTwoToneIcon from '@mui/icons-material/ViewListTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';

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
    icon: ViewListTwoToneIcon,
    i18nKey: "menu.table",
  },
  {
    url: "/okta",
    icon: ExitToAppTwoToneIcon,
    i18nKey: "menu.okta",
  }
]