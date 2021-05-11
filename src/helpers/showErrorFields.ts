import { AppDispatch } from "../store/index"
import { FieldData } from 'rc-field-form/lib/interface'
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

export function showErrorFields (err: any, dispatch:AppDispatch, action: ActionCreatorWithPayload<any, string>, form: FieldData[]) {
  if (err.isAxiosError) {
    let newData = [...form]
    // подсвечиваем подя с ошибкой
    for (let key in err.response.data.errors) {
      let field = newData.find(item => ~String(item.name).indexOf(key))
      if (field) {
        const updField = { ...field, errors: [...err.response.data.errors[key]] }
        newData = newData.filter(item => !~String(item.name).indexOf(key))
        newData.push(updField)
      }
    }
    dispatch(action(newData))
  }
}

export function errorFields (err: any, FormInstance:any) {
  if (!err?.isAxiosError && err?.response?.status !== 422) return
  const errs = []
  for (let key in err.response.data.errors) {
    errs.push({
      name: key,
      errors: err.response.data.errors[key]
    })
  }
  FormInstance.setFields(errs)
}
