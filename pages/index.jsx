import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { authenticate, isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push("/mint");
  }, [isAuthenticated]);

  return (
    <>
      <section className="sec">
        <div className="container ct b">
          <div className="row">
            <div className="col cimg">
              <div className="logo" alt="logo" />
            </div>
          </div>
          <div className="row">
            <div className="col d-flex align-items-center">
              <div>
                <p className="text-light">Login with</p>
                <button onClick={authenticate} className="btn-styles">
                  <div className="btn-column">
                    <div className="icons-btn fox" />
                    <div className="icons-btn">
                      <p className="p-3 black">Metamask</p>
                    </div>
                  </div>
                </button>
                <p className="justify-content-end phelp">Help</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container f">
        <div className="row rowf">
          <div className="col">
            <p className="pf">Lorem ipsum</p>
          </div>
          <div className="col">
            <p className="pf">Lorem ipsum</p>
          </div>
          <div className="col">
            <p className="pf">Lorem ipsum</p>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
