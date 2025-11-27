import React, { useEffect, useRef } from 'react';

interface AuthSuccessPageProps {
  onEnterApp: () => void;
}

const AuthSuccessPage: React.FC<AuthSuccessPageProps> = ({ onEnterApp }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
        x: null as number | null,
        y: null as number | null,
        radius: 150
    }

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', function(){
        mouse.x = null;
        mouse.y = null;
    })

    class Particle {
        x: number;
        y: number;
        directionX: number;
        directionY: number;
        size: number;
        color: string;

        constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            this.x += this.directionX;
            this.y += this.directionY;

            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;
            let color = '#81ecec';

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                               + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                
                if (distance < (canvas.width/7) * (canvas.height/7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = 'rgba(129, 236, 236,' + opacityValue + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    };

    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
        <canvas ref={canvasRef} id="canvas-bg"></canvas>
        <div className="login-container">
            <div className="login-box">
                <h2>USER LOGIN</h2>
                <form>
                    <div className="input-group">
                        <label>用户名 / 手机号</label>
                        <input type="text" placeholder="请输入账号" />
                    </div>
                    <div className="input-group">
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" />
                    </div>
                    <button type="button" className="btn-login" onClick={onEnterApp}>登 录</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default AuthSuccessPage;
