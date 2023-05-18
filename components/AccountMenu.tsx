import React from 'react'
import { signOut } from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser'

interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser()

  if (!visible) {
    return null
  }

  return (
    <div
      className="
        border-ray-800
        absolute
        top-14 
        right-0
        flex
        w-56
        flex-col
        border-2
        bg-black 
        py-5
      "
    >
      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        <div
          className="
            group/item
            flex
            w-full
            flex-row
            items-center
            gap-3
            px-3
          "
        >
          <img
            className="
              w-8
              rounded-md
            "
            src="/images/default-blue.png"
            alt=""
          />
          <p
            className="
              text-sm
              text-white
              group-hover/item:underline
            "
          >
            {data?.name}
          </p>
        </div>
        <hr
          className="
            my-4
            h-px
            border-0
            bg-gray-600
          "
        />
        <div
          className="
            px-3
            text-center
            text-sm
            text-white
            hover:underline
          "
          onClick={() => signOut()}
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu
