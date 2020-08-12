import React from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const SubmitForm = () => {
  return (
    <>
      <Input placeholder='Name' />
      <Button color='orange'>Submit Score</Button>
    </>
  )
}

export default SubmitForm
