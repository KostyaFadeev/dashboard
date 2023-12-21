'use client';
import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from '@nextui-org/react';

interface SizeModalProps {
    isOpen: boolean;
    onChangeHandle: any;
}

export default function SizeModal({isOpen, onChangeHandle}:SizeModalProps) {
    const sizeData = [[34.5, 35.5, 3, 3.5, 22.5], [35, 36, 3.5, 4, 23], [35.5, 36.5, 4, 4.5, 23.5], [36, 36.5, 3.4, 6, 23], [37, 38, 5, 5.5, 24], [37.5, 38.5, 5.5, 6, 24], [38, 39, 6, 6.5, 24.5], [39, 40, 6, 7, 25], [39.5, 40.5, 6.5, 7.5, 25.5], [40, 41, 7, 8, 26], [41, 42, 7.5, 8.5, 26.5], [41.5, 42.5, 8, 9, 27], [42, 43, 8.5, 9.5, 27.5], [43, 44, 9, 10, 28], [43.5, 44.5, 9.5, 10.5, 28.5], [44, 45, 10, 11, 29], [44.5, 45.5, 10.5, 11.5, 29.5], [45, 46, 11, 12, 30]];

    return (
        <Modal className="w-full" size="3xl" isOpen={isOpen} onOpenChange={onChangeHandle} placement="top">
            <ModalContent className="px-2 pt-2">
                {(onClose) => (
                    <div className="flex flex-col">
                        <ModalHeader className="flex flex-col px-2">
                            <h2>Таблица размеров</h2>

                        </ModalHeader>
                        <ModalBody className="flex flex-col mt-2 px-2 min-w-[41%]">
                            <Table aria-label="Example static collection table">
                                <TableHeader>
                                    <TableColumn>RUS</TableColumn>
                                    <TableColumn>EU</TableColumn>
                                    <TableColumn>UK</TableColumn>
                                    <TableColumn>SU</TableColumn>
                                    <TableColumn>СМ</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {sizeData.map((sizes, index) => {
                                        return (
                                            <TableRow key={index}>
                                                {sizes.map((item, index) => {
                                                    return (
                                                        <TableCell key={index}>{item}</TableCell>
                                                    )
                                                })}
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                            <ModalFooter className="mt-auto px-0">
                                <Button className="bg-blue-500" color="primary" onPress={onClose}>
                                    Закрыть
                                </Button>
                            </ModalFooter>
                        </ModalBody>
                    </div>
                )}
            </ModalContent>
        </Modal>
    );
}
