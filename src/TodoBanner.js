import React from 'react'

export default function TodoBanner ({userName, items}) {
  return (
    <h1 className="bg-primary text-white text-center p-2">
      { userName }'s To Do List
      ({ items.filter(item => !item.done).length } items to do)
    </h1>
  )
}