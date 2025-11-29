import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width: number, height: number;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null };

        const config = {
            particleCount: 130,
            connectionDistance: 150,
            mouseRadius: 280,
            baseSpeed: 0.55,
            pulseSpeed: 0.04,
            particleColor: 'rgba(66, 133, 244, 0.7)',
            lineColor: 'rgba(66, 133, 244, ',
            mouseLineColor: 'rgba(50, 100, 230, ',
        };

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            const density = (width * height) / 10000;
            config.particleCount = density > 160 ? 160 : density;
            particles = [];
            for (let i = 0; i < config.particleCount; i++) {
                particles.push(new Particle());
            }
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            baseSize: number;
            size: number;
            angle: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * config.baseSpeed;
                this.vy = (Math.random() - 0.5) * config.baseSpeed;
                this.baseSize = Math.random() * 2 + 1;
                this.size = this.baseSize;
                this.angle = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.angle += config.pulseSpeed;
                this.size = this.baseSize + Math.sin(this.angle) * 0.5;
                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;

                if (mouse.x != null && mouse.y != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < config.mouseRadius) {
                        this.x += dx * 0.001;
                        this.y += dy * 0.001;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = config.particleColor;
                ctx.fill();
            }
        }

        const connect = () => {
            if (!ctx) return;
            let opacityValue = 1;

            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < config.connectionDistance * config.connectionDistance) {
                        const distReal = Math.sqrt(distSq);
                        opacityValue = 1 - distReal / config.connectionDistance;
                        ctx.strokeStyle = `${config.lineColor}${opacityValue * 0.25})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            if (mouse.x != null && mouse.y != null) {
                for (let i = 0; i < particles.length; i++) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < config.mouseRadius * config.mouseRadius) {
                        const distReal = Math.sqrt(distSq);
                        opacityValue = 1 - distReal / config.mouseRadius;
                        ctx.strokeStyle = `${config.mouseLineColor}${opacityValue * 0.7})`;
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        };

        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            connect();
        };

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none', // Allow clicks to pass through
                background: 'linear-gradient(to bottom, #ffffff 0%, #f1f3f4 100%)'
            }}
        />
    );
};

export default ParticleBackground;
