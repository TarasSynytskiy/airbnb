// import React,{Component} from 'react'

// class Timer extends Component {
//     constructor() {
//         super()
//         this.timer = 0;
//         this.startTimer = this.startTimer.bind(this);
//         this.countDown = this.countDown.bind(this);
//         this.state = { time: {}, seconds: 127 }
               
//     }

//     secondsToTime(secs){
//         let hours = Math.floor(secs / (60 * 60));
    
//         let divisor_for_minutes = secs % (60 * 60);
//         let minutes = Math.floor(divisor_for_minutes / 60);
    
//         let divisor_for_seconds = divisor_for_minutes % 60;
//         let seconds = Math.ceil(divisor_for_seconds);
    
//         let obj = {
//           "h": hours,
//           "m": minutes,
//           "s": seconds
//         };
//         return obj;
//       }
//    render () {
//         return (
//             <div className=''>
//         <button className='text-purple-500 bg-white px-10 
//             py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl
//             active:scale-90 transition duration-150' onClick={this.startTimer}>Start</button>

//           {this.state.time.m}:{this.state.time.s}
//             </div>
//         )
//     }

//     componentDidMount() {
//         let timeLeftVar = this.secondsToTime(this.state.seconds);
//         this.setState({ time: timeLeftVar });
//         this.startTimer()
            
//     }
//     startTimer() {
//         if (this.timer == 0 && this.state.seconds > 0) {
//           this.timer = setInterval(this.countDown, 1000);
//         }
//       }
    
//       countDown() {
//         // Remove one second, set state so a re-render happens.
//         let seconds = this.state.seconds - 1;
//         this.setState({
//           time: this.secondsToTime(seconds),
//           seconds: seconds,
//         });
        
//         // Check if we're at zero.
//         if (seconds == 0) { 
//           clearInterval(this.timer);
//         }
//       }
    
// }
// export default Timer;