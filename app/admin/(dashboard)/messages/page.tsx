"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Search, Mail, Loader2, Eye, Archive, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import type { ContactSubmission } from "@/lib/supabase-types"

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<ContactSubmission | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/admin/messages")
      const data = await response.json()
      if (data.messages) {
        setMessages(data.messages)
      }
    } catch {
      toast.error("Failed to fetch messages")
    } finally {
      setIsLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) throw new Error("Failed to update")

      toast.success("Status updated")
      setMessages(messages.map((m) => (m.id === id ? { ...m, status: status as ContactSubmission["status"] } : m)))
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, status: status as ContactSubmission["status"] })
      }
    } catch {
      toast.error("Failed to update status")
    }
  }

  const filteredMessages = messages.filter(
    (message) =>
      message.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">New</Badge>
      case "read":
        return <Badge variant="secondary">Read</Badge>
      case "replied":
        return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Replied</Badge>
      case "archived":
        return <Badge variant="outline">Archived</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const viewMessage = (message: ContactSubmission) => {
    setSelectedMessage(message)
    if (message.status === "new") {
      updateStatus(message.id, "read")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">View and manage contact form submissions</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Messages</CardTitle>
              <CardDescription>
                {messages.filter((m) => m.status === "new").length} unread of {messages.length} total
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="text-center py-8">
              <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {searchQuery ? "No messages found" : "No messages yet"}
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>From</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.map((message) => (
                  <TableRow
                    key={message.id}
                    className={message.status === "new" ? "bg-blue-50/50 dark:bg-blue-900/10" : ""}
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {message.first_name} {message.last_name}
                        </p>
                        <p className="text-xs text-muted-foreground">{message.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {message.subject}
                    </TableCell>
                    <TableCell>{getStatusBadge(message.status)}</TableCell>
                    <TableCell>
                      {new Date(message.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => viewMessage(message)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateStatus(message.id, "replied")}
                          title="Mark as replied"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateStatus(message.id, "archived")}
                          title="Archive"
                        >
                          <Archive className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Message Detail Dialog */}
      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From {selectedMessage?.first_name} {selectedMessage?.last_name} ({selectedMessage?.email})
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Received: {selectedMessage && new Date(selectedMessage.created_at).toLocaleString()}</span>
              {selectedMessage?.phone && <span>Phone: {selectedMessage.phone}</span>}
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="whitespace-pre-wrap">{selectedMessage?.message}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => selectedMessage && updateStatus(selectedMessage.id, "replied")}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Mark as Replied
              </Button>
              <Button
                variant="outline"
                onClick={() => selectedMessage && updateStatus(selectedMessage.id, "archived")}
              >
                <Archive className="mr-2 h-4 w-4" />
                Archive
              </Button>
              <Button asChild>
                <a href={`mailto:${selectedMessage?.email}?subject=Re: ${selectedMessage?.subject}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Reply via Email
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
