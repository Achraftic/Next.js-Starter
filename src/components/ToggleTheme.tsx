"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by setting the state only on mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Ensure it only renders icons after mounting to avoid hydration mismatch
    if (!mounted) return null;

    return (
        <Button
            asChild
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 group"
        >
            {theme === "dark" ? (
                <Sun
                    id="sun"
                    className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all group-focus:rotate-12"
                />
            ) : (
                <Moon
                    id="moon"
                    className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all group-focus:rotate-12"
                />
            )}
        </Button>
    );
};

export default ToggleTheme;
