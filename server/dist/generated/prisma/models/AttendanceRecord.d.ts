import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AttendanceRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$AttendanceRecordPayload>;
export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null;
    _min: AttendanceRecordMinAggregateOutputType | null;
    _max: AttendanceRecordMaxAggregateOutputType | null;
};
export type AttendanceRecordMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    staffId: string | null;
    dateISO: string | null;
    signInAt: Date | null;
    signOutAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceRecordMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    staffId: string | null;
    dateISO: string | null;
    signInAt: Date | null;
    signOutAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AttendanceRecordCountAggregateOutputType = {
    id: number;
    organizationId: number;
    staffId: number;
    dateISO: number;
    signInAt: number;
    signOutAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AttendanceRecordMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    staffId?: true;
    dateISO?: true;
    signInAt?: true;
    signOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceRecordMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    staffId?: true;
    dateISO?: true;
    signInAt?: true;
    signOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AttendanceRecordCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    staffId?: true;
    dateISO?: true;
    signInAt?: true;
    signOutAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AttendanceRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AttendanceRecordCountAggregateInputType;
    _min?: AttendanceRecordMinAggregateInputType;
    _max?: AttendanceRecordMaxAggregateInputType;
};
export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttendanceRecord[P]> : Prisma.GetScalarType<T[P], AggregateAttendanceRecord[P]>;
};
export type AttendanceRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithAggregationInput | Prisma.AttendanceRecordOrderByWithAggregationInput[];
    by: Prisma.AttendanceRecordScalarFieldEnum[] | Prisma.AttendanceRecordScalarFieldEnum;
    having?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceRecordCountAggregateInputType | true;
    _min?: AttendanceRecordMinAggregateInputType;
    _max?: AttendanceRecordMaxAggregateInputType;
};
export type AttendanceRecordGroupByOutputType = {
    id: string;
    organizationId: string;
    staffId: string;
    dateISO: string;
    signInAt: Date | null;
    signOutAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AttendanceRecordCountAggregateOutputType | null;
    _min: AttendanceRecordMinAggregateOutputType | null;
    _max: AttendanceRecordMaxAggregateOutputType | null;
};
type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>;
}>>;
export type AttendanceRecordWhereInput = {
    AND?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    OR?: Prisma.AttendanceRecordWhereInput[];
    NOT?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    id?: Prisma.StringFilter<"AttendanceRecord"> | string;
    organizationId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    staffId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    dateISO?: Prisma.StringFilter<"AttendanceRecord"> | string;
    signInAt?: Prisma.DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null;
    signOutAt?: Prisma.DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceRecord"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffMemberScalarRelationFilter, Prisma.StaffMemberWhereInput>;
};
export type AttendanceRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    dateISO?: Prisma.SortOrder;
    signInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    signOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    staff?: Prisma.StaffMemberOrderByWithRelationInput;
};
export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    staffId_dateISO?: Prisma.AttendanceRecordStaffIdDateISOCompoundUniqueInput;
    AND?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    OR?: Prisma.AttendanceRecordWhereInput[];
    NOT?: Prisma.AttendanceRecordWhereInput | Prisma.AttendanceRecordWhereInput[];
    organizationId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    staffId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    dateISO?: Prisma.StringFilter<"AttendanceRecord"> | string;
    signInAt?: Prisma.DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null;
    signOutAt?: Prisma.DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceRecord"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    staff?: Prisma.XOR<Prisma.StaffMemberScalarRelationFilter, Prisma.StaffMemberWhereInput>;
}, "id" | "staffId_dateISO">;
export type AttendanceRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    dateISO?: Prisma.SortOrder;
    signInAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    signOutAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AttendanceRecordCountOrderByAggregateInput;
    _max?: Prisma.AttendanceRecordMaxOrderByAggregateInput;
    _min?: Prisma.AttendanceRecordMinOrderByAggregateInput;
};
export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput | Prisma.AttendanceRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttendanceRecordScalarWhereWithAggregatesInput | Prisma.AttendanceRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AttendanceRecord"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"AttendanceRecord"> | string;
    staffId?: Prisma.StringWithAggregatesFilter<"AttendanceRecord"> | string;
    dateISO?: Prisma.StringWithAggregatesFilter<"AttendanceRecord"> | string;
    signInAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceRecord"> | Date | string | null;
    signOutAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AttendanceRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string;
};
export type AttendanceRecordCreateInput = {
    id?: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAttendanceRecordsInput;
    staff: Prisma.StaffMemberCreateNestedOneWithoutAttendanceInput;
};
export type AttendanceRecordUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    staffId: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAttendanceRecordsNestedInput;
    staff?: Prisma.StaffMemberUpdateOneRequiredWithoutAttendanceNestedInput;
};
export type AttendanceRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceRecordCreateManyInput = {
    id?: string;
    organizationId: string;
    staffId: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceRecordListRelationFilter = {
    every?: Prisma.AttendanceRecordWhereInput;
    some?: Prisma.AttendanceRecordWhereInput;
    none?: Prisma.AttendanceRecordWhereInput;
};
export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttendanceRecordStaffIdDateISOCompoundUniqueInput = {
    staffId: string;
    dateISO: string;
};
export type AttendanceRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    dateISO?: Prisma.SortOrder;
    signInAt?: Prisma.SortOrder;
    signOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    dateISO?: Prisma.SortOrder;
    signInAt?: Prisma.SortOrder;
    signOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    dateISO?: Prisma.SortOrder;
    signInAt?: Prisma.SortOrder;
    signOutAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AttendanceRecordCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceRecordCreateWithoutOrganizationInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceRecordCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceRecordCreateWithoutOrganizationInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceRecordCreateManyOrganizationInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceRecordCreateWithoutOrganizationInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceRecordCreateManyOrganizationInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutOrganizationInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput> | Prisma.AttendanceRecordCreateWithoutOrganizationInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput | Prisma.AttendanceRecordCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.AttendanceRecordCreateManyOrganizationInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutOrganizationInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStaffInput, Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput> | Prisma.AttendanceRecordCreateWithoutStaffInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput | Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStaffInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUncheckedCreateNestedManyWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStaffInput, Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput> | Prisma.AttendanceRecordCreateWithoutStaffInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput | Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStaffInputEnvelope;
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
};
export type AttendanceRecordUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStaffInput, Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput> | Prisma.AttendanceRecordCreateWithoutStaffInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput | Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStaffInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStaffInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStaffInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutStaffInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStaffInput, Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput> | Prisma.AttendanceRecordCreateWithoutStaffInput[] | Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput[];
    connectOrCreate?: Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput | Prisma.AttendanceRecordCreateOrConnectWithoutStaffInput[];
    upsert?: Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStaffInput | Prisma.AttendanceRecordUpsertWithWhereUniqueWithoutStaffInput[];
    createMany?: Prisma.AttendanceRecordCreateManyStaffInputEnvelope;
    set?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    disconnect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    delete?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    connect?: Prisma.AttendanceRecordWhereUniqueInput | Prisma.AttendanceRecordWhereUniqueInput[];
    update?: Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStaffInput | Prisma.AttendanceRecordUpdateWithWhereUniqueWithoutStaffInput[];
    updateMany?: Prisma.AttendanceRecordUpdateManyWithWhereWithoutStaffInput | Prisma.AttendanceRecordUpdateManyWithWhereWithoutStaffInput[];
    deleteMany?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
};
export type AttendanceRecordCreateWithoutOrganizationInput = {
    id?: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff: Prisma.StaffMemberCreateNestedOneWithoutAttendanceInput;
};
export type AttendanceRecordUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    staffId: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceRecordCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput>;
};
export type AttendanceRecordCreateManyOrganizationInputEnvelope = {
    data: Prisma.AttendanceRecordCreateManyOrganizationInput | Prisma.AttendanceRecordCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type AttendanceRecordUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedCreateWithoutOrganizationInput>;
};
export type AttendanceRecordUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutOrganizationInput, Prisma.AttendanceRecordUncheckedUpdateWithoutOrganizationInput>;
};
export type AttendanceRecordUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.AttendanceRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyWithoutOrganizationInput>;
};
export type AttendanceRecordScalarWhereInput = {
    AND?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
    OR?: Prisma.AttendanceRecordScalarWhereInput[];
    NOT?: Prisma.AttendanceRecordScalarWhereInput | Prisma.AttendanceRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"AttendanceRecord"> | string;
    organizationId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    staffId?: Prisma.StringFilter<"AttendanceRecord"> | string;
    dateISO?: Prisma.StringFilter<"AttendanceRecord"> | string;
    signInAt?: Prisma.DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null;
    signOutAt?: Prisma.DateTimeNullableFilter<"AttendanceRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AttendanceRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AttendanceRecord"> | Date | string;
};
export type AttendanceRecordCreateWithoutStaffInput = {
    id?: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutAttendanceRecordsInput;
};
export type AttendanceRecordUncheckedCreateWithoutStaffInput = {
    id?: string;
    organizationId: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceRecordCreateOrConnectWithoutStaffInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStaffInput, Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput>;
};
export type AttendanceRecordCreateManyStaffInputEnvelope = {
    data: Prisma.AttendanceRecordCreateManyStaffInput | Prisma.AttendanceRecordCreateManyStaffInput[];
    skipDuplicates?: boolean;
};
export type AttendanceRecordUpsertWithWhereUniqueWithoutStaffInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutStaffInput, Prisma.AttendanceRecordUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateWithoutStaffInput, Prisma.AttendanceRecordUncheckedCreateWithoutStaffInput>;
};
export type AttendanceRecordUpdateWithWhereUniqueWithoutStaffInput = {
    where: Prisma.AttendanceRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateWithoutStaffInput, Prisma.AttendanceRecordUncheckedUpdateWithoutStaffInput>;
};
export type AttendanceRecordUpdateManyWithWhereWithoutStaffInput = {
    where: Prisma.AttendanceRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyWithoutStaffInput>;
};
export type AttendanceRecordCreateManyOrganizationInput = {
    id?: string;
    staffId: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceRecordUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.StaffMemberUpdateOneRequiredWithoutAttendanceNestedInput;
};
export type AttendanceRecordUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceRecordUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceRecordCreateManyStaffInput = {
    id?: string;
    organizationId: string;
    dateISO: string;
    signInAt?: Date | string | null;
    signOutAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AttendanceRecordUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutAttendanceRecordsNestedInput;
};
export type AttendanceRecordUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceRecordUncheckedUpdateManyWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    dateISO?: Prisma.StringFieldUpdateOperationsInput | string;
    signInAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    signOutAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AttendanceRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    staffId?: boolean;
    dateISO?: boolean;
    signInAt?: boolean;
    signOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.StaffMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    staffId?: boolean;
    dateISO?: boolean;
    signInAt?: boolean;
    signOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.StaffMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    staffId?: boolean;
    dateISO?: boolean;
    signInAt?: boolean;
    signOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.StaffMemberDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    staffId?: boolean;
    dateISO?: boolean;
    signInAt?: boolean;
    signOutAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AttendanceRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "staffId" | "dateISO" | "signInAt" | "signOutAt" | "createdAt" | "updatedAt", ExtArgs["result"]["attendanceRecord"]>;
export type AttendanceRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.StaffMemberDefaultArgs<ExtArgs>;
};
export type AttendanceRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.StaffMemberDefaultArgs<ExtArgs>;
};
export type AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    staff?: boolean | Prisma.StaffMemberDefaultArgs<ExtArgs>;
};
export type $AttendanceRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AttendanceRecord";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        staff: Prisma.$StaffMemberPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        staffId: string;
        dateISO: string;
        signInAt: Date | null;
        signOutAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["attendanceRecord"]>;
    composites: {};
};
export type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload, S>;
export type AttendanceRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttendanceRecordCountAggregateInputType | true;
};
export interface AttendanceRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'];
        meta: {
            name: 'AttendanceRecord';
        };
    };
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AttendanceRecordFindManyArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AttendanceRecordCreateArgs>(args: Prisma.SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AttendanceRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AttendanceRecordDeleteArgs>(args: Prisma.SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AttendanceRecordUpdateArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AttendanceRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AttendanceRecordUpsertArgs>(args: Prisma.SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__AttendanceRecordClient<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AttendanceRecordCountArgs>(args?: Prisma.Subset<T, AttendanceRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType> : number>;
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Prisma.Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>;
    groupBy<T extends AttendanceRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttendanceRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: AttendanceRecordGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AttendanceRecordFieldRefs;
}
export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.StaffMemberDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StaffMemberDefaultArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AttendanceRecordFieldRefs {
    readonly id: Prisma.FieldRef<"AttendanceRecord", 'String'>;
    readonly organizationId: Prisma.FieldRef<"AttendanceRecord", 'String'>;
    readonly staffId: Prisma.FieldRef<"AttendanceRecord", 'String'>;
    readonly dateISO: Prisma.FieldRef<"AttendanceRecord", 'String'>;
    readonly signInAt: Prisma.FieldRef<"AttendanceRecord", 'DateTime'>;
    readonly signOutAt: Prisma.FieldRef<"AttendanceRecord", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AttendanceRecord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AttendanceRecord", 'DateTime'>;
}
export type AttendanceRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceRecordScalarFieldEnum | Prisma.AttendanceRecordScalarFieldEnum[];
};
export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceRecordScalarFieldEnum | Prisma.AttendanceRecordScalarFieldEnum[];
};
export type AttendanceRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where?: Prisma.AttendanceRecordWhereInput;
    orderBy?: Prisma.AttendanceRecordOrderByWithRelationInput | Prisma.AttendanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.AttendanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttendanceRecordScalarFieldEnum | Prisma.AttendanceRecordScalarFieldEnum[];
};
export type AttendanceRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceRecordCreateInput, Prisma.AttendanceRecordUncheckedCreateInput>;
};
export type AttendanceRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AttendanceRecordCreateManyInput | Prisma.AttendanceRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AttendanceRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    data: Prisma.AttendanceRecordCreateManyInput | Prisma.AttendanceRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AttendanceRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AttendanceRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateInput, Prisma.AttendanceRecordUncheckedUpdateInput>;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceRecordWhereInput;
    limit?: number;
};
export type AttendanceRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AttendanceRecordUpdateManyMutationInput, Prisma.AttendanceRecordUncheckedUpdateManyInput>;
    where?: Prisma.AttendanceRecordWhereInput;
    limit?: number;
    include?: Prisma.AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AttendanceRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttendanceRecordCreateInput, Prisma.AttendanceRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AttendanceRecordUpdateInput, Prisma.AttendanceRecordUncheckedUpdateInput>;
};
export type AttendanceRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
    where: Prisma.AttendanceRecordWhereUniqueInput;
};
export type AttendanceRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
    limit?: number;
};
export type AttendanceRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AttendanceRecordSelect<ExtArgs> | null;
    omit?: Prisma.AttendanceRecordOmit<ExtArgs> | null;
    include?: Prisma.AttendanceRecordInclude<ExtArgs> | null;
};
export {};
