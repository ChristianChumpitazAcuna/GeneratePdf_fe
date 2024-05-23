import { useEffect, useState } from "react";
import ApiService from "../service/apiService";
import CertificatesTable from "../components/certificatesTable";
import Certificado from "../model/certificates";
import { Toaster, toast } from "sonner";
import { ILoading } from "../ui/svgs";
import { Button } from '../ui/button';


export default function CertificatesPage() {
    const apiService = new ApiService();
    const [data, setData] = useState<Certificado[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchData = async () => {
        const response = await apiService.getData();
        const certficates = response.map((certificate: any) => Certificado.fromJson(certificate));
        setData(certficates);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const postData = async () => {
        setIsLoading(true);
        try {
            await apiService.postData();
            toast.success("Certificados generados correctamente");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <section className="w-full h-full flex flex-col items-center justify-center gap-y-4 " >
            <Button className="flex flex-row gap-x-2 items-center h-9"
                onClick={postData}
                disabled={isLoading}
            >
                {isLoading ? <>Generando<ILoading /></> : "Generar Certificados"}
            </Button>
            <CertificatesTable datos={data} />

            <Toaster
                position="top-right"
            />
        </section>
    );
}