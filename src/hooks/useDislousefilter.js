import  { useState } from 'react'

const useDisclousefilter = () => {

    const [isOpenfilter, setIsOpen] = useState(false);
  const onOpenfilter = () => {
    setIsOpen(true);
  };
  const onClosefilter = () => {
    setIsOpen(false);
  };
  return [isOpenfilter,onClosefilter,onOpenfilter];
}

export default useDisclousefilter