import { useEffect } from "react";

const useScrollSync =(
  masterRef: React.RefObject<any>|null,
  slaveRef: React.RefObject<any>|null
)=> {
  useEffect(() => {
    const master = masterRef?.current;
    const slave = slaveRef?.current;
    if (!master || !slave) return;

    const sync = () => {
      const ratio =
        master.scrollTop / (master.scrollHeight - master.clientHeight || 1);
      slave.scrollTop =
        ratio * (slave.scrollHeight - slave.clientHeight);
    };

    master.addEventListener("scroll", sync, { passive: true });
    return () => master.removeEventListener("scroll", sync);
  }, [masterRef, slaveRef]);
}

export default useScrollSync