import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StaffMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$StaffMemberPayload>;
export type AggregateStaffMember = {
    _count: StaffMemberCountAggregateOutputType | null;
    _min: StaffMemberMinAggregateOutputType | null;
    _max: StaffMemberMaxAggregateOutputType | null;
};
export type StaffMemberMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    fullName: string | null;
    role: string | null;
    email: string | null;
    passwordHash: string | null;
    isVerified: boolean | null;
    verifyToken: string | null;
    resetToken: string | null;
    resetTokenExp: Date | null;
    appRole: $Enums.AppRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StaffMemberMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    fullName: string | null;
    role: string | null;
    email: string | null;
    passwordHash: string | null;
    isVerified: boolean | null;
    verifyToken: string | null;
    resetToken: string | null;
    resetTokenExp: Date | null;
    appRole: $Enums.AppRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StaffMemberCountAggregateOutputType = {
    id: number;
    organizationId: number;
    fullName: number;
    role: number;
    email: number;
    passwordHash: number;
    isVerified: number;
    verifyToken: number;
    resetToken: number;
    resetTokenExp: number;
    appRole: number;
    permissions: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StaffMemberMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    fullName?: true;
    role?: true;
    email?: true;
    passwordHash?: true;
    isVerified?: true;
    verifyToken?: true;
    resetToken?: true;
    resetTokenExp?: true;
    appRole?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StaffMemberMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    fullName?: true;
    role?: true;
    email?: true;
    passwordHash?: true;
    isVerified?: true;
    verifyToken?: true;
    resetToken?: true;
    resetTokenExp?: true;
    appRole?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StaffMemberCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    fullName?: true;
    role?: true;
    email?: true;
    passwordHash?: true;
    isVerified?: true;
    verifyToken?: true;
    resetToken?: true;
    resetTokenExp?: true;
    appRole?: true;
    permissions?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StaffMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffMemberWhereInput;
    orderBy?: Prisma.StaffMemberOrderByWithRelationInput | Prisma.StaffMemberOrderByWithRelationInput[];
    cursor?: Prisma.StaffMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StaffMemberCountAggregateInputType;
    _min?: StaffMemberMinAggregateInputType;
    _max?: StaffMemberMaxAggregateInputType;
};
export type GetStaffMemberAggregateType<T extends StaffMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateStaffMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStaffMember[P]> : Prisma.GetScalarType<T[P], AggregateStaffMember[P]>;
};
export type StaffMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffMemberWhereInput;
    orderBy?: Prisma.StaffMemberOrderByWithAggregationInput | Prisma.StaffMemberOrderByWithAggregationInput[];
    by: Prisma.StaffMemberScalarFieldEnum[] | Prisma.StaffMemberScalarFieldEnum;
    having?: Prisma.StaffMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StaffMemberCountAggregateInputType | true;
    _min?: StaffMemberMinAggregateInputType;
    _max?: StaffMemberMaxAggregateInputType;
};
export type StaffMemberGroupByOutputType = {
    id: string;
    organizationId: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash: string | null;
    isVerified: boolean;
    verifyToken: string | null;
    resetToken: string | null;
    resetTokenExp: Date | null;
    appRole: $Enums.AppRole;
    permissions: $Enums.Permission[];
    createdAt: Date;
    updatedAt: Date;
    _count: StaffMemberCountAggregateOutputType | null;
    _min: StaffMemberMinAggregateOutputType | null;
    _max: StaffMemberMaxAggregateOutputType | null;
};
type GetStaffMemberGroupByPayload<T extends StaffMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StaffMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StaffMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StaffMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StaffMemberGroupByOutputType[P]>;
}>>;
export type StaffMemberWhereInput = {
    AND?: Prisma.StaffMemberWhereInput | Prisma.StaffMemberWhereInput[];
    OR?: Prisma.StaffMemberWhereInput[];
    NOT?: Prisma.StaffMemberWhereInput | Prisma.StaffMemberWhereInput[];
    id?: Prisma.StringFilter<"StaffMember"> | string;
    organizationId?: Prisma.StringFilter<"StaffMember"> | string;
    fullName?: Prisma.StringFilter<"StaffMember"> | string;
    role?: Prisma.StringFilter<"StaffMember"> | string;
    email?: Prisma.StringFilter<"StaffMember"> | string;
    passwordHash?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    isVerified?: Prisma.BoolFilter<"StaffMember"> | boolean;
    verifyToken?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    resetToken?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    resetTokenExp?: Prisma.DateTimeNullableFilter<"StaffMember"> | Date | string | null;
    appRole?: Prisma.EnumAppRoleFilter<"StaffMember"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"StaffMember">;
    createdAt?: Prisma.DateTimeFilter<"StaffMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffMember"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    attendance?: Prisma.AttendanceRecordListRelationFilter;
};
export type StaffMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verifyToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    resetToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    resetTokenExp?: Prisma.SortOrderInput | Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    permissions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    attendance?: Prisma.AttendanceRecordOrderByRelationAggregateInput;
};
export type StaffMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    organizationId_email?: Prisma.StaffMemberOrganizationIdEmailCompoundUniqueInput;
    AND?: Prisma.StaffMemberWhereInput | Prisma.StaffMemberWhereInput[];
    OR?: Prisma.StaffMemberWhereInput[];
    NOT?: Prisma.StaffMemberWhereInput | Prisma.StaffMemberWhereInput[];
    organizationId?: Prisma.StringFilter<"StaffMember"> | string;
    fullName?: Prisma.StringFilter<"StaffMember"> | string;
    role?: Prisma.StringFilter<"StaffMember"> | string;
    email?: Prisma.StringFilter<"StaffMember"> | string;
    passwordHash?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    isVerified?: Prisma.BoolFilter<"StaffMember"> | boolean;
    verifyToken?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    resetToken?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    resetTokenExp?: Prisma.DateTimeNullableFilter<"StaffMember"> | Date | string | null;
    appRole?: Prisma.EnumAppRoleFilter<"StaffMember"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"StaffMember">;
    createdAt?: Prisma.DateTimeFilter<"StaffMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffMember"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    attendance?: Prisma.AttendanceRecordListRelationFilter;
}, "id" | "organizationId_email">;
export type StaffMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verifyToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    resetToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    resetTokenExp?: Prisma.SortOrderInput | Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    permissions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StaffMemberCountOrderByAggregateInput;
    _max?: Prisma.StaffMemberMaxOrderByAggregateInput;
    _min?: Prisma.StaffMemberMinOrderByAggregateInput;
};
export type StaffMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.StaffMemberScalarWhereWithAggregatesInput | Prisma.StaffMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.StaffMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StaffMemberScalarWhereWithAggregatesInput | Prisma.StaffMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StaffMember"> | string;
    organizationId?: Prisma.StringWithAggregatesFilter<"StaffMember"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"StaffMember"> | string;
    role?: Prisma.StringWithAggregatesFilter<"StaffMember"> | string;
    email?: Prisma.StringWithAggregatesFilter<"StaffMember"> | string;
    passwordHash?: Prisma.StringNullableWithAggregatesFilter<"StaffMember"> | string | null;
    isVerified?: Prisma.BoolWithAggregatesFilter<"StaffMember"> | boolean;
    verifyToken?: Prisma.StringNullableWithAggregatesFilter<"StaffMember"> | string | null;
    resetToken?: Prisma.StringNullableWithAggregatesFilter<"StaffMember"> | string | null;
    resetTokenExp?: Prisma.DateTimeNullableWithAggregatesFilter<"StaffMember"> | Date | string | null;
    appRole?: Prisma.EnumAppRoleWithAggregatesFilter<"StaffMember"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"StaffMember">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StaffMember"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"StaffMember"> | Date | string;
};
export type StaffMemberCreateInput = {
    id?: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutStaffInput;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStaffInput;
};
export type StaffMemberUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStaffInput;
};
export type StaffMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutStaffNestedInput;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStaffNestedInput;
};
export type StaffMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStaffNestedInput;
};
export type StaffMemberCreateManyInput = {
    id?: string;
    organizationId: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffMemberListRelationFilter = {
    every?: Prisma.StaffMemberWhereInput;
    some?: Prisma.StaffMemberWhereInput;
    none?: Prisma.StaffMemberWhereInput;
};
export type StaffMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EnumPermissionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission[] | Prisma.ListEnumPermissionFieldRefInput<$PrismaModel> | null;
    has?: $Enums.Permission | Prisma.EnumPermissionFieldRefInput<$PrismaModel> | null;
    hasEvery?: $Enums.Permission[] | Prisma.ListEnumPermissionFieldRefInput<$PrismaModel>;
    hasSome?: $Enums.Permission[] | Prisma.ListEnumPermissionFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type StaffMemberOrganizationIdEmailCompoundUniqueInput = {
    organizationId: string;
    email: string;
};
export type StaffMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verifyToken?: Prisma.SortOrder;
    resetToken?: Prisma.SortOrder;
    resetTokenExp?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    permissions?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verifyToken?: Prisma.SortOrder;
    resetToken?: Prisma.SortOrder;
    resetTokenExp?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    isVerified?: Prisma.SortOrder;
    verifyToken?: Prisma.SortOrder;
    resetToken?: Prisma.SortOrder;
    resetTokenExp?: Prisma.SortOrder;
    appRole?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StaffMemberScalarRelationFilter = {
    is?: Prisma.StaffMemberWhereInput;
    isNot?: Prisma.StaffMemberWhereInput;
};
export type StaffMemberCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.StaffMemberCreateWithoutOrganizationInput, Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput> | Prisma.StaffMemberCreateWithoutOrganizationInput[] | Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput | Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.StaffMemberCreateManyOrganizationInputEnvelope;
    connect?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
};
export type StaffMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.StaffMemberCreateWithoutOrganizationInput, Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput> | Prisma.StaffMemberCreateWithoutOrganizationInput[] | Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput | Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.StaffMemberCreateManyOrganizationInputEnvelope;
    connect?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
};
export type StaffMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.StaffMemberCreateWithoutOrganizationInput, Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput> | Prisma.StaffMemberCreateWithoutOrganizationInput[] | Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput | Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.StaffMemberUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.StaffMemberUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.StaffMemberCreateManyOrganizationInputEnvelope;
    set?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    disconnect?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    delete?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    connect?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    update?: Prisma.StaffMemberUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.StaffMemberUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.StaffMemberUpdateManyWithWhereWithoutOrganizationInput | Prisma.StaffMemberUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.StaffMemberScalarWhereInput | Prisma.StaffMemberScalarWhereInput[];
};
export type StaffMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.StaffMemberCreateWithoutOrganizationInput, Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput> | Prisma.StaffMemberCreateWithoutOrganizationInput[] | Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput | Prisma.StaffMemberCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.StaffMemberUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.StaffMemberUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.StaffMemberCreateManyOrganizationInputEnvelope;
    set?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    disconnect?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    delete?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    connect?: Prisma.StaffMemberWhereUniqueInput | Prisma.StaffMemberWhereUniqueInput[];
    update?: Prisma.StaffMemberUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.StaffMemberUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.StaffMemberUpdateManyWithWhereWithoutOrganizationInput | Prisma.StaffMemberUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.StaffMemberScalarWhereInput | Prisma.StaffMemberScalarWhereInput[];
};
export type StaffMemberCreatepermissionsInput = {
    set: $Enums.Permission[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EnumAppRoleFieldUpdateOperationsInput = {
    set?: $Enums.AppRole;
};
export type StaffMemberUpdatepermissionsInput = {
    set?: $Enums.Permission[];
    push?: $Enums.Permission | $Enums.Permission[];
};
export type StaffMemberCreateNestedOneWithoutAttendanceInput = {
    create?: Prisma.XOR<Prisma.StaffMemberCreateWithoutAttendanceInput, Prisma.StaffMemberUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: Prisma.StaffMemberCreateOrConnectWithoutAttendanceInput;
    connect?: Prisma.StaffMemberWhereUniqueInput;
};
export type StaffMemberUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: Prisma.XOR<Prisma.StaffMemberCreateWithoutAttendanceInput, Prisma.StaffMemberUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: Prisma.StaffMemberCreateOrConnectWithoutAttendanceInput;
    upsert?: Prisma.StaffMemberUpsertWithoutAttendanceInput;
    connect?: Prisma.StaffMemberWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StaffMemberUpdateToOneWithWhereWithoutAttendanceInput, Prisma.StaffMemberUpdateWithoutAttendanceInput>, Prisma.StaffMemberUncheckedUpdateWithoutAttendanceInput>;
};
export type StaffMemberCreateWithoutOrganizationInput = {
    id?: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attendance?: Prisma.AttendanceRecordCreateNestedManyWithoutStaffInput;
};
export type StaffMemberUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attendance?: Prisma.AttendanceRecordUncheckedCreateNestedManyWithoutStaffInput;
};
export type StaffMemberCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.StaffMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffMemberCreateWithoutOrganizationInput, Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput>;
};
export type StaffMemberCreateManyOrganizationInputEnvelope = {
    data: Prisma.StaffMemberCreateManyOrganizationInput | Prisma.StaffMemberCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type StaffMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.StaffMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.StaffMemberUpdateWithoutOrganizationInput, Prisma.StaffMemberUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.StaffMemberCreateWithoutOrganizationInput, Prisma.StaffMemberUncheckedCreateWithoutOrganizationInput>;
};
export type StaffMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.StaffMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.StaffMemberUpdateWithoutOrganizationInput, Prisma.StaffMemberUncheckedUpdateWithoutOrganizationInput>;
};
export type StaffMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.StaffMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.StaffMemberUpdateManyMutationInput, Prisma.StaffMemberUncheckedUpdateManyWithoutOrganizationInput>;
};
export type StaffMemberScalarWhereInput = {
    AND?: Prisma.StaffMemberScalarWhereInput | Prisma.StaffMemberScalarWhereInput[];
    OR?: Prisma.StaffMemberScalarWhereInput[];
    NOT?: Prisma.StaffMemberScalarWhereInput | Prisma.StaffMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"StaffMember"> | string;
    organizationId?: Prisma.StringFilter<"StaffMember"> | string;
    fullName?: Prisma.StringFilter<"StaffMember"> | string;
    role?: Prisma.StringFilter<"StaffMember"> | string;
    email?: Prisma.StringFilter<"StaffMember"> | string;
    passwordHash?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    isVerified?: Prisma.BoolFilter<"StaffMember"> | boolean;
    verifyToken?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    resetToken?: Prisma.StringNullableFilter<"StaffMember"> | string | null;
    resetTokenExp?: Prisma.DateTimeNullableFilter<"StaffMember"> | Date | string | null;
    appRole?: Prisma.EnumAppRoleFilter<"StaffMember"> | $Enums.AppRole;
    permissions?: Prisma.EnumPermissionNullableListFilter<"StaffMember">;
    createdAt?: Prisma.DateTimeFilter<"StaffMember"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"StaffMember"> | Date | string;
};
export type StaffMemberCreateWithoutAttendanceInput = {
    id?: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutStaffInput;
};
export type StaffMemberUncheckedCreateWithoutAttendanceInput = {
    id?: string;
    organizationId: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffMemberCreateOrConnectWithoutAttendanceInput = {
    where: Prisma.StaffMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffMemberCreateWithoutAttendanceInput, Prisma.StaffMemberUncheckedCreateWithoutAttendanceInput>;
};
export type StaffMemberUpsertWithoutAttendanceInput = {
    update: Prisma.XOR<Prisma.StaffMemberUpdateWithoutAttendanceInput, Prisma.StaffMemberUncheckedUpdateWithoutAttendanceInput>;
    create: Prisma.XOR<Prisma.StaffMemberCreateWithoutAttendanceInput, Prisma.StaffMemberUncheckedCreateWithoutAttendanceInput>;
    where?: Prisma.StaffMemberWhereInput;
};
export type StaffMemberUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: Prisma.StaffMemberWhereInput;
    data: Prisma.XOR<Prisma.StaffMemberUpdateWithoutAttendanceInput, Prisma.StaffMemberUncheckedUpdateWithoutAttendanceInput>;
};
export type StaffMemberUpdateWithoutAttendanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutStaffNestedInput;
};
export type StaffMemberUncheckedUpdateWithoutAttendanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffMemberCreateManyOrganizationInput = {
    id?: string;
    fullName: string;
    role: string;
    email: string;
    passwordHash?: string | null;
    isVerified?: boolean;
    verifyToken?: string | null;
    resetToken?: string | null;
    resetTokenExp?: Date | string | null;
    appRole?: $Enums.AppRole;
    permissions?: Prisma.StaffMemberCreatepermissionsInput | $Enums.Permission[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StaffMemberUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: Prisma.AttendanceRecordUpdateManyWithoutStaffNestedInput;
};
export type StaffMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: Prisma.AttendanceRecordUncheckedUpdateManyWithoutStaffNestedInput;
};
export type StaffMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifyToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExp?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appRole?: Prisma.EnumAppRoleFieldUpdateOperationsInput | $Enums.AppRole;
    permissions?: Prisma.StaffMemberUpdatepermissionsInput | $Enums.Permission[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StaffMemberCountOutputType = {
    attendance: number;
};
export type StaffMemberCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attendance?: boolean | StaffMemberCountOutputTypeCountAttendanceArgs;
};
export type StaffMemberCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberCountOutputTypeSelect<ExtArgs> | null;
};
export type StaffMemberCountOutputTypeCountAttendanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttendanceRecordWhereInput;
};
export type StaffMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    isVerified?: boolean;
    verifyToken?: boolean;
    resetToken?: boolean;
    resetTokenExp?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    attendance?: boolean | Prisma.StaffMember$attendanceArgs<ExtArgs>;
    _count?: boolean | Prisma.StaffMemberCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffMember"]>;
export type StaffMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    isVerified?: boolean;
    verifyToken?: boolean;
    resetToken?: boolean;
    resetTokenExp?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffMember"]>;
export type StaffMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    organizationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    isVerified?: boolean;
    verifyToken?: boolean;
    resetToken?: boolean;
    resetTokenExp?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["staffMember"]>;
export type StaffMemberSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    fullName?: boolean;
    role?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    isVerified?: boolean;
    verifyToken?: boolean;
    resetToken?: boolean;
    resetTokenExp?: boolean;
    appRole?: boolean;
    permissions?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StaffMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "organizationId" | "fullName" | "role" | "email" | "passwordHash" | "isVerified" | "verifyToken" | "resetToken" | "resetTokenExp" | "appRole" | "permissions" | "createdAt" | "updatedAt", ExtArgs["result"]["staffMember"]>;
export type StaffMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    attendance?: boolean | Prisma.StaffMember$attendanceArgs<ExtArgs>;
    _count?: boolean | Prisma.StaffMemberCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StaffMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type StaffMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $StaffMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StaffMember";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        attendance: Prisma.$AttendanceRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        organizationId: string;
        fullName: string;
        role: string;
        email: string;
        passwordHash: string | null;
        isVerified: boolean;
        verifyToken: string | null;
        resetToken: string | null;
        resetTokenExp: Date | null;
        appRole: $Enums.AppRole;
        permissions: $Enums.Permission[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["staffMember"]>;
    composites: {};
};
export type StaffMemberGetPayload<S extends boolean | null | undefined | StaffMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload, S>;
export type StaffMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StaffMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StaffMemberCountAggregateInputType | true;
};
export interface StaffMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StaffMember'];
        meta: {
            name: 'StaffMember';
        };
    };
    findUnique<T extends StaffMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, StaffMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StaffMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StaffMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StaffMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, StaffMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StaffMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StaffMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StaffMemberFindManyArgs>(args?: Prisma.SelectSubset<T, StaffMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StaffMemberCreateArgs>(args: Prisma.SelectSubset<T, StaffMemberCreateArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StaffMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, StaffMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StaffMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StaffMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StaffMemberDeleteArgs>(args: Prisma.SelectSubset<T, StaffMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StaffMemberUpdateArgs>(args: Prisma.SelectSubset<T, StaffMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StaffMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, StaffMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StaffMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, StaffMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StaffMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StaffMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StaffMemberUpsertArgs>(args: Prisma.SelectSubset<T, StaffMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__StaffMemberClient<runtime.Types.Result.GetResult<Prisma.$StaffMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StaffMemberCountArgs>(args?: Prisma.Subset<T, StaffMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StaffMemberCountAggregateOutputType> : number>;
    aggregate<T extends StaffMemberAggregateArgs>(args: Prisma.Subset<T, StaffMemberAggregateArgs>): Prisma.PrismaPromise<GetStaffMemberAggregateType<T>>;
    groupBy<T extends StaffMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StaffMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: StaffMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StaffMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StaffMemberFieldRefs;
}
export interface Prisma__StaffMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attendance<T extends Prisma.StaffMember$attendanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StaffMember$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StaffMemberFieldRefs {
    readonly id: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly organizationId: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly fullName: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly role: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly email: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly isVerified: Prisma.FieldRef<"StaffMember", 'Boolean'>;
    readonly verifyToken: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly resetToken: Prisma.FieldRef<"StaffMember", 'String'>;
    readonly resetTokenExp: Prisma.FieldRef<"StaffMember", 'DateTime'>;
    readonly appRole: Prisma.FieldRef<"StaffMember", 'AppRole'>;
    readonly permissions: Prisma.FieldRef<"StaffMember", 'Permission[]'>;
    readonly createdAt: Prisma.FieldRef<"StaffMember", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"StaffMember", 'DateTime'>;
}
export type StaffMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where: Prisma.StaffMemberWhereUniqueInput;
};
export type StaffMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where: Prisma.StaffMemberWhereUniqueInput;
};
export type StaffMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where?: Prisma.StaffMemberWhereInput;
    orderBy?: Prisma.StaffMemberOrderByWithRelationInput | Prisma.StaffMemberOrderByWithRelationInput[];
    cursor?: Prisma.StaffMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffMemberScalarFieldEnum | Prisma.StaffMemberScalarFieldEnum[];
};
export type StaffMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where?: Prisma.StaffMemberWhereInput;
    orderBy?: Prisma.StaffMemberOrderByWithRelationInput | Prisma.StaffMemberOrderByWithRelationInput[];
    cursor?: Prisma.StaffMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffMemberScalarFieldEnum | Prisma.StaffMemberScalarFieldEnum[];
};
export type StaffMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where?: Prisma.StaffMemberWhereInput;
    orderBy?: Prisma.StaffMemberOrderByWithRelationInput | Prisma.StaffMemberOrderByWithRelationInput[];
    cursor?: Prisma.StaffMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StaffMemberScalarFieldEnum | Prisma.StaffMemberScalarFieldEnum[];
};
export type StaffMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StaffMemberCreateInput, Prisma.StaffMemberUncheckedCreateInput>;
};
export type StaffMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StaffMemberCreateManyInput | Prisma.StaffMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StaffMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    data: Prisma.StaffMemberCreateManyInput | Prisma.StaffMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StaffMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StaffMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StaffMemberUpdateInput, Prisma.StaffMemberUncheckedUpdateInput>;
    where: Prisma.StaffMemberWhereUniqueInput;
};
export type StaffMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StaffMemberUpdateManyMutationInput, Prisma.StaffMemberUncheckedUpdateManyInput>;
    where?: Prisma.StaffMemberWhereInput;
    limit?: number;
};
export type StaffMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StaffMemberUpdateManyMutationInput, Prisma.StaffMemberUncheckedUpdateManyInput>;
    where?: Prisma.StaffMemberWhereInput;
    limit?: number;
    include?: Prisma.StaffMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StaffMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where: Prisma.StaffMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.StaffMemberCreateInput, Prisma.StaffMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StaffMemberUpdateInput, Prisma.StaffMemberUncheckedUpdateInput>;
};
export type StaffMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
    where: Prisma.StaffMemberWhereUniqueInput;
};
export type StaffMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StaffMemberWhereInput;
    limit?: number;
};
export type StaffMember$attendanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StaffMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StaffMemberSelect<ExtArgs> | null;
    omit?: Prisma.StaffMemberOmit<ExtArgs> | null;
    include?: Prisma.StaffMemberInclude<ExtArgs> | null;
};
export {};
