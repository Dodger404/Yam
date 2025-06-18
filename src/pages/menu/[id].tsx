'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { getMenu } from '@/api/get-menu'
import { MenuList } from '@/components/lists/menuList'
import { FiltersMenu } from '@/components/ui/filters'
import Header from '@/components/ui/headers/header'
import HeaderMobile from '@/components/ui/headers/headerMobile'
import PageTitleWithBack from '@/components/ui/pageTitleWithBack'

export default function MenuPage() {
  const [menu, setMenu] = useState(null)
  const [filterGroup, setFilterGroup] = useState(null)

  const router = useRouter()
  const { id } = router.query
  const decodedName = router.query.name
    ? decodeURIComponent(router.query.name as string)
    : 'Мёд и перец'

  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMenu'],
    queryFn: () => getMenu(id as string),
  })

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setMenu(
        data.reduce((acc, item) => {
          const { group } = item
          if (!acc[group]) {
            acc[group] = []
          }
          acc[group].push(item)
          return acc
        }, {}),
      )
    }
  }, [data])

  return (
    <div className="min-h-screen bg-[url('/images/bgImageM.jpg')] bg-cover bg-fixed bg-center lg:bg-gray-100 lg:bg-none">
      <HeaderMobile />
      <Header />
      <div className='mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-5 py-5 lg:px-12 lg:py-8'>
        <PageTitleWithBack title={decodedName} />
        {!isLoading && !isError && menu ? (
          <Fragment>
            <FiltersMenu menu={menu} setFilterGroup={setFilterGroup} />
            {!filterGroup ? (
              <Fragment>
                {Object.keys(menu).map(groupName => (
                  <section className='flex flex-col gap-6'>
                    <h2 className='font-roboto text-2xl font-bold text-gray-800'>{groupName}</h2>
                    <MenuList list={menu[groupName]} />
                  </section>
                ))}
              </Fragment>
            ) : (
              <section className='flex flex-col gap-6'>
                <h2 className='font-roboto text-2xl font-bold text-gray-800'>{filterGroup}</h2>
                <MenuList list={menu[filterGroup]} />
              </section>
            )}
          </Fragment>
        ) : (
          'Загрузка меню...'
        )}
      </div>
    </div>
  )
}
