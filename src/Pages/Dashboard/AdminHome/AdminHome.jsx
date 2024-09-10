import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHooks/useAuth";
import useAxios from "../../../CustomHooks/useAxios";
import { FaBook, FaDollarSign, FaList, FaUsers } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie,  Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',"red"];


const AdminHome = () => {
    const { user } = useAuth();

    const axiosSecure = useAxios();

    const { data: stats = {} } = useQuery({

        queryKey: ['admin-stat'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    console.log(stats);

    const { data: chartData=[] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stat')
            return res.data;
        }
    })

    console.log(chartData);


    // custom shaped bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //   customed pie chart

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    const PieChartData = chartData.map(data=>{
        return {name:data.category, value:data.revenue}
    })




        return (
            <div className="mx-6 my-6">
                <div className="text-3xl font-serif">
                    {
                        user ? user.displayName : 'Admin home is here'
                    } ,
                </div>           <h2 className="font-serif">welcome bak to admin home</h2>

                <div className="stats shadow mt-6">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className="text-3xl"></FaDollarSign>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">{stats?.revenue}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl"></FaUsers>
                        </div>
                        <div className="stat-title"> Users</div>
                        <div className="stat-value">{stats.user}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaBook className="text-3xl"></FaBook>
                        </div>
                        <div className="stat-title"> Products</div>
                        <div className="stat-value">{stats.menuItem}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaList className="text-3xl"></FaList>
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>

                <div className="flex">
                    <div className="w-1/2">
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>

                    <div className="w-1/2">
                    <PieChart width={400} height={400}>
          <Pie
            data={PieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {PieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
                    </div>
                </div>
            </div>

        );
    };

    export default AdminHome;