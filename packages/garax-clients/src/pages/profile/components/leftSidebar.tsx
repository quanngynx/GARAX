import { Link } from "react-router-dom";

// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";


// import { ExpandOutline } from '@/components/icons'
// import Typography from "@mui/material/Typography";

function leftSidebar() {
 // eslint-disable-next-line react-hooks/rules-of-hooks
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   navigate('/')
  //   window.location.reload()
  // }

  return (
    <div className="w-[30%]">
      <div className="flex flex-col pr-8 text-black">
        <Link to={'/user/profile'}>
          <div className="pb-4 rounded-[6px] font-bold">Hồ sơ cá nhân</div>
        </Link>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandOutline />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Thanh toán</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link to={'/user/profile/payment-infor'}>
            <Typography>Thông tin thanh toán</Typography>
            </Link>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandOutline />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Cá nhân hóa</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link to={'/user/profile/theme'}>
              <Typography>Chủ đề</Typography>
            </Link>
          </AccordionDetails>
          <AccordionDetails>
            <Link to={'/user/profile/notification'}>
              <Typography>Thông báo</Typography>
            </Link>
          </AccordionDetails>
        </Accordion>

        <Link to={'/user/profile/sercurity'}>
          <div className="py-4 rounded-[6px] font-bold">Bảo mật</div>
        </Link>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandOutline />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Hành động</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link to={'/user/profile/history-access'}>
              <Typography>Lịch sử truy cập</Typography>
            </Link>
          </AccordionDetails>
          <AccordionDetails>
            <button onClick={handleLogout}>
            <Typography>Đăng xuất</Typography>
            </button>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
}

export default leftSidebar;
