import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function comboCleaning() {
  return (
    <div className="grid grid-cols-2 gap-20">
      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={16} />
        <Paper elevation={24} />
      </Box> */}

      <div className="w-[600px] h-[300px] bg-[#f6f6f6] rounded-2xl  shadow">

      </div>

      <div className="w-[600px] h-[300px] bg-[#f6f6f6] rounded-2xl shadow">

      </div>

      <div className="w-[600px] h-[300px] bg-[#f6f6f6] rounded-2xl shadow">

      </div>

      <div className="w-[600px] h-[300px] bg-[#f6f6f6] rounded-2xl shadow">

      </div>
    </div>
  );
}

export default comboCleaning;
