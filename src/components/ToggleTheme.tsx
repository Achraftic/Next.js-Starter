'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react"
import { useTheme } from 'next-themes';
const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }
    return (
       
            <Button asChild onClick={toggleTheme} variant="ghost" size="icon" className='absolute top-6 right-6 group'>

                {theme === "dark" ? 
                <Sun id="sun"  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-focus:rotate-12 " />: 
                <Moon id="moon" className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-focus:rotate-12 " />
                }

            </Button>
   
    );
}

export default ToggleTheme;
