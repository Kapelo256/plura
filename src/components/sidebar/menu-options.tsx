'use client'

import {
  Agency,
  AgencySidebarOption,
  SubAccount,
  SubAccountSidebarOption,
} from '@prisma/client'


type Props = {
  defaultOpen?: boolean
  subAccounts: SubAccount[]
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[]
  sidebarLogo: string
  details: any
  user: any
  id: string
}

const MenuOptions = ({
  details,
  id,
  sidebarLogo,
  sidebarOpt,
  subAccounts,
  user,
  defaultOpen,
}: Props) => {
  return (
    <div>MenuOptions</div>
  )
}

export default MenuOptions