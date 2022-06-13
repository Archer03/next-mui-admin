import CloudSyncTwoToneIcon from '@mui/icons-material/CloudSyncTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';
import ViewListTwoToneIcon from '@mui/icons-material/ViewListTwoTone';

export default [
  {
    url: "/requestDemo",
    icon: CloudSyncTwoToneIcon,
    text: "Request Demo",
  },
  {
    url: "/formDemo",
    icon: AppRegistrationTwoToneIcon,
    text: "Form Demo",
    childRoutes: [
      {
        url: "validation",
        icon: FactCheckTwoToneIcon,
        text: "Validation",
      }
    ]
  },
  {
    url: "/table",
    icon: ViewListTwoToneIcon,
    text: "Table Demo",
  }
]