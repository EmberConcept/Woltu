'use client'
import React from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Cookies = () => {
    const [showConsent, setShowConsent] = React.useState(true);

    React.useEffect(() => {
        const consent = localStorage.getItem("localConsent");
        if (consent === "true" || consent === "false") {
            setShowConsent(false); // Hide consent if user has already accepted or rejected
        }
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
        localStorage.setItem("localConsent", "true");
    };

    const rejectCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "false", {});
        localStorage.setItem("localConsent", "false");
    };

    if (showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-[5000]">
            <div className="fixed bottom-0 left-0 flex items-center justify-between px-4 py-8 bg-gray-100 border border-t-2 border-gray-200 w-full">
                <MaxWidthWrapper>
                    <Badge>Rechtliches</Badge>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cookies</h1>
                    <p className='text-muted-foreground mt-2'>Wir verwenden Cookies, um sicherzustellen, dass unsere Website reibungslos funktioniert und wir Ihnen das bestmögliche Surferlebnis bieten können. Mit Ihrer Zustimmung erlauben Sie uns, Cookies und ähnliche Technologien zu verwenden, um Daten zu sammeln und zu verarbeiten. Weitere Informationen finden Sie in unserer Datenschutzrichtlinie.</p>
                    <div className='flex flex-col gap-5 md:flex-row md:items-center mt-5'>
                        <Button variant="outline" onClick={() => rejectCookie()}>
                            <p>Ablehnen</p>
                        </Button>
                        <Button variant="outline" onClick={() => acceptCookie()}>
                            <p>Akzeptieren</p>
                        </Button>
                    </div>
                </MaxWidthWrapper>
            </div>
        </div>
    );
};

export default Cookies;
