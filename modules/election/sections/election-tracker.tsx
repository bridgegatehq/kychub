"use client"
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import MenuTabs from '../components/menu-tabs';
const ElectionTracker = () => {
  return (
    <div className='bg-white w-full rounded-[12px] '>
        <div className='flex p-[20px] justify-between w-full'>
        <h2 className='font-semibold text-[18px] md:text-[24px]'>Election Tracker</h2>
        <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='text-[#F5F5F5] text-base bg-[#FE9206] rounded-[5px]' >Presidency</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Presidency</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Governorship</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Logout</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <MenuTabs />

        
    </div>
  )
}

export default ElectionTracker