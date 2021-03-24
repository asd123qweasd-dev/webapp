import { FC, useEffect, useState, ReactElement } from "react";

export interface ConditionallyRenderProps {
  client?: boolean
  server?: boolean
}

export const ConditionallyRender: FC<ConditionallyRenderProps> = ({children, client, server}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if(!isMounted && client) {
    return null;
  }

  if(isMounted && server) {
    return null;
  }

  return children as ReactElement
}
