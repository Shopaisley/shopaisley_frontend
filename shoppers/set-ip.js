import ip from 'ip';
import fs from 'fs';
import dotenv from "dotenv"

dotenv.config();
const serverIp = ip.address();
const envContent = `VITE_SERVER_IP=${serverIp}\nVITE_SERVER_PORT=5173`;

fs.writeFileSync(".env", envContent, 'utf8');
console.log(`Server IP set to ${serverIp}`);
console.log(process.env.REACT_APP_SERVER_IP)
