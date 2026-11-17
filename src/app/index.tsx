//นำเข้า วิว ข้อความ ชื่อไลบรารี่ 
import { View, Text, StyleSheet, Image} from 'react-native' ;

//ส่งออก เริ่มต้น ตรงตัว ชื่อfunc
export default function App() {
  return (
    <View style={homeStyle.container}>


      <Image source={require('@/assets/1000026976.jpg')} 
      style={{
        width: 200,
        height: 200,
        borderRadius: 100, // โค้ง
        borderWidth: 5, //ขอบ
        //borderColor: ... สีขอบ
        borderColor: "skyblue",
      }}
      />
      <Text style={homeStyle.title}>Natchada Phutthaisong</Text>

      <Text style={{padding:10}}>บักนัทมันมึน</Text>

      <View style={{flexDirection: "row"}} >
        
      </View>

      <View style={{ flexDirection:"column",backgroundColor:"lightgray" ,width:"300",height:"100",gap:"10",borderRadius:10 ,padding:10}}>
        <Text>ห้อง BIT.1/1 เลขที่19</Text>
        <Text>Email: natchada.phutthaisong@e-tech.ac.th</Text>
        <Text>Phone: 098-894-1722</Text>
      </View>

      <Text style={{right:130 ,marginTop:10}}>ภาพกิจกรรม</Text>

      
      <View style={{flexDirection:'row', gap:15 , padding:10}}>
        <Image
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsMPOxH9mEZCiEzT31XG3Q-FNgKOCfbhxbxrvO0eNuA&s=10"}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10, // โค้ง
        //borderWidth: 5, //ขอบ
        //borderColor: ... สีขอบ
      }}
      />
      <Image
         source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnr0-Ns-1IHB-RE4TeNd0dGh1fqw9VBAzDcOxBZKqxWA&s=10"}}
      style={{width:100,height:100,borderRadius:10}}
      />

      <Image
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXWPGDu9hFgqf7_DYZ3bibUdlcNIzW7qfN79DO46EDeg4QGkDATkujsc&s=10"}}
        style={{width:100,height:100,borderRadius:10}}
      />

      </View>


      
      
    </View>

  

    
  )

  



}
 //ตกแต่ง
  const homeStyle = StyleSheet.create({
   container:{
    backgroundColor: "white",
    flex:1, // ขยายที่
    alignItems: "center"
   },
   title:{
    color: "black", //สีอักสอน
    fontSize: 30, //ขนาด 
    fontWeight: 700, // ความหนา 100-900 
    fontStyle: "italic", // เอียง 
    textAlign: "center"
   }
 })