import { Card } from '@/components/ui/card'
import React from 'react'
import DialogCreateGroup from './components/DialogCreateGroup'

const Admin = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto px-3 py-6'>
        <div className='w-full flex justify-end'>
            <DialogCreateGroup/>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
            <Card className='p-6 flex flex-col gap-3 aspect-video'>
                <h2 className='text-lg'>Group Name</h2>
                <p className='text-sm text-gray-500 line-clamp-4' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim similique quae nesciunt magni cupiditate! Ad, quas architecto aperiam sit omnis incidunt quam voluptatibus accusamus. A!</p>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default Admin
