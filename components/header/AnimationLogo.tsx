'use client';
import React from "react";
import Lottie from 'lottie-react';
import { cn } from "@/utils/cn";
import animationData from '@/assets/json/rouleur.json';

interface AnimationLogoProps {
    className?: string;
    height?: number;
    width?: number;
    loop?: boolean;
    autoplay?: boolean;
}

const AnimationLogo: React.FC<AnimationLogoProps> = ({
    className = '',
    height = 128,
    width = 128,
    loop = true,
    autoplay = true
}) => {
    return (
        <div className={cn('flex justify-center items-center', className)}>
            <Lottie 
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                style={{ height, width }}
            />
        </div>
    )
}

export default AnimationLogo;