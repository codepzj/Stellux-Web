"use client"

import { convertToTreeData } from "@/utils/convert";
import { getDocumentTreeByID, getRootDocumentByID } from "@/api/document";
import { useEffect } from "react";
import useDocStore from "@/store/doc";

export default function SetDocHandler({ alias, document_id }: { alias: string, document_id: string }) {

    const { docId, setDoctree, setDocTitle, setDocThumbnail } = useDocStore();

    useEffect(() => {
        const fetchDocTree = async () => {
            // 如果文档id相同，则不进行获取
            if (docId === document_id) {
                return;
            }
            const res = await getDocumentTreeByID(document_id);
            const treeItems = convertToTreeData(res.data, alias);
            setDoctree(document_id, treeItems);
        }
        const fetchRoot = async () => {
            // 如果文档id相同，则不进行获取
            if (docId === document_id) {
                return;
            }
            const res = await getRootDocumentByID(document_id);
            setDocTitle(res.data.title); // 设置文档标题
            setDocThumbnail(res.data.thumbnail); // 设置文档缩略图
        };
        fetchDocTree();
        fetchRoot();
    }, [document_id, alias]);
    return null;
}