import React, { useState } from 'react'
import { Input } from './ui/Input'
import { Button } from './ui/Button';
import { ChevronRightIcon } from 'lucide-react';

const LoginForm = () => {
  const [userInfo,setUserInfor] = useState({
    email:"",
    password:""
  })
  const handleSubmit = () => {
    console.log(userInfo);
  }
  const onChangeInput = (e) =>{
    setUserInfor(previnfo=>({
      ...previnfo,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor='email'>Email</label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="e.g. subhradwip@gmail.com"
            required={true}
            onChange={onChangeInput}
            inputSize="medium"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="password">Email</label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Please enter password here..."
            required={true}
            onChange={onChangeInput}
            inputSize="medium"
          />
        </div>
      </div>

      <p className="text-sm text-neutral-500 my-7">
        By proceeding, I acknowledge that I have read the{' '}
        <span className="underline text-neutral-600">Privacy Policy </span> and
        agree to Shopkart{' '}
        <span className=" text-neutral-600">Terms of Use </span>.
      </p>
      <Button type="submit" className="w-full">
        Login <ChevronRightIcon size={15} />
      </Button>
    </form>
  )
}

export default LoginForm