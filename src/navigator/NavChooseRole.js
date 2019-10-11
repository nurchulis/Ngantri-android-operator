import { createStackNavigator } from 'react-navigation'

import ChooseRole from '../components/views/ChooseRole'
import CreateTenant from '../components/views/owner/CreateTenant'
import ScanBarcode from '../components/views/staff/ScanBarcode'
import TenantFound from '../components/views/staff/TenantFound'

const NavAuth = createStackNavigator({
  ChooseRole: {
    screen: ChooseRole
  },
  CreateTenant: {
    screen: CreateTenant
  },
  ScanBarcode: {
  	screen: ScanBarcode
  },
  TenantFound: {
  	screen: TenantFound
  }
})

export default NavAuth